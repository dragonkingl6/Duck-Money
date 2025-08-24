/**
 * Các hàm tiện ích cho thư viện quy đổi tiền tệ
 */

/**
 * Format số tiền theo định dạng tiền tệ
 * @param {number} amount - Số tiền
 * @param {string} currency - Mã tiền tệ
 * @param {string} locale - Locale (mặc định: 'vi-VN')
 * @returns {string} Số tiền đã format
 */
export function formatCurrency(amount, currency = 'VND', locale = 'vi-VN') {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount);
  } catch (error) {
    // Fallback nếu locale không hỗ trợ
    return `${amount.toLocaleString()} ${currency.toUpperCase()}`;
  }
}

/**
 * Format số tiền với tùy chọn tùy chỉnh
 * @param {number} amount - Số tiền
 * @param {Object} options - Tùy chọn format
 * @returns {string} Số tiền đã format
 */
export function formatAmount(amount, options = {}) {
  const {
    currency = 'VND',
    locale = 'vi-VN',
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    showSymbol = true
  } = options;

  try {
    const formatter = new Intl.NumberFormat(locale, {
      style: showSymbol ? 'currency' : 'decimal',
      currency: currency.toUpperCase(),
      minimumFractionDigits,
      maximumFractionDigits
    });
    
    return formatter.format(amount);
  } catch (error) {
    // Fallback
    const formatted = amount.toLocaleString(locale, {
      minimumFractionDigits,
      maximumFractionDigits
    });
    
    return showSymbol ? `${formatted} ${currency.toUpperCase()}` : formatted;
  }
}

/**
 * Chuyển đổi số thành từ đọc tiếng Việt
 * @param {number} number - Số cần chuyển đổi
 * @returns {string} Số đọc bằng tiếng Việt
 */
export function numberToVietnameseWords(number) {
  const units = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ'];
  const ones = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  const teens = ['mười', 'mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu', 'mười bảy', 'mười tám', 'mười chín'];
  const tens = ['', '', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];

  function convertGroup(num) {
    if (num === 0) return '';
    
    let result = '';
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    
    if (hundreds > 0) {
      result += ones[hundreds] + ' trăm ';
    }
    
    if (remainder > 0) {
      if (remainder < 10) {
        result += ones[remainder];
      } else if (remainder < 20) {
        result += teens[remainder - 10];
      } else {
        const ten = Math.floor(remainder / 10);
        const one = remainder % 10;
        result += tens[ten];
        if (one > 0) {
          result += ' ' + ones[one];
        }
      }
    }
    
    return result.trim();
  }

  if (number === 0) return 'không';
  
  const isNegative = number < 0;
  const absNumber = Math.abs(number);
  const integerPart = Math.floor(absNumber);
  const decimalPart = absNumber - integerPart;
  
  let result = '';
  let unitIndex = 0;
  let tempNumber = integerPart;
  
  while (tempNumber > 0) {
    const group = tempNumber % 1000;
    if (group > 0) {
      const groupWords = convertGroup(group);
      result = groupWords + (unitIndex > 0 ? ' ' + units[unitIndex] + ' ' : '') + result;
    }
    tempNumber = Math.floor(tempNumber / 1000);
    unitIndex++;
  }
  
  if (decimalPart > 0) {
    const decimalStr = decimalPart.toFixed(2).substring(2);
    result += ' phẩy ' + decimalStr.split('').map(d => ones[parseInt(d)]).join(' ');
  }
  
  return (isNegative ? 'âm ' : '') + result.trim();
}

/**
 * Tính phần trăm thay đổi giữa hai giá trị
 * @param {number} oldValue - Giá trị cũ
 * @param {number} newValue - Giá trị mới
 * @returns {number} Phần trăm thay đổi
 */
export function calculatePercentageChange(oldValue, newValue) {
  if (oldValue === 0) return newValue > 0 ? 100 : 0;
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Làm tròn số tiền theo quy tắc ngân hàng
 * @param {number} amount - Số tiền cần làm tròn
 * @param {number} decimals - Số chữ số thập phân (mặc định: 2)
 * @returns {number} Số tiền đã làm tròn
 */
export function roundCurrency(amount, decimals = 2) {
  const factor = Math.pow(10, decimals);
  return Math.round(amount * factor) / factor;
}

/**
 * Kiểm tra xem một chuỗi có phải là mã tiền tệ hợp lệ không
 * @param {string} currency - Chuỗi cần kiểm tra
 * @returns {boolean} True nếu là mã tiền tệ hợp lệ
 */
export function isValidCurrencyCode(currency) {
  if (typeof currency !== 'string') return false;
  return /^[A-Z]{3}$/.test(currency.toUpperCase());
}

/**
 * Tạo mã màu cho biểu đồ dựa trên phần trăm thay đổi
 * @param {number} percentageChange - Phần trăm thay đổi
 * @returns {string} Mã màu hex
 */
export function getChangeColor(percentageChange) {
  if (percentageChange > 0) {
    // Xanh lá cho tăng giá
    return '#28a745';
  } else if (percentageChange < 0) {
    // Đỏ cho giảm giá
    return '#dc3545';
  } else {
    // Xám cho không thay đổi
    return '#6c757d';
  }
}

/**
 * Chuyển đổi timestamp thành định dạng ngày giờ Việt Nam
 * @param {number} timestamp - Timestamp (seconds)
 * @returns {string} Chuỗi ngày giờ
 */
export function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * Tạo ID duy nhất cho cache
 * @param {...any} args - Các tham số để tạo ID
 * @returns {string} ID duy nhất
 */
export function generateCacheId(...args) {
  return args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
  ).join('_');
}

/**
 * Debounce function để tránh gọi API quá nhiều
 * @param {Function} func - Hàm cần debounce
 * @param {number} wait - Thời gian chờ (ms)
 * @returns {Function} Hàm đã debounce
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function để giới hạn tần suất gọi API
 * @param {Function} func - Hàm cần throttle
 * @param {number} limit - Giới hạn thời gian (ms)
 * @returns {Function} Hàm đã throttle
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
