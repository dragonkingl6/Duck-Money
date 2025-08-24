# 🦆 Duck Money

> Thư viện quy đổi tiền tệ bằng JavaScript thuần, không cần API hay dependencies bên ngoài.

[![npm version](https://badge.fury.io/js/duck-money.svg)](https://badge.fury.io/js/duck-money)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ Tính năng

- 🌍 **Hỗ trợ 150+ tiền tệ** từ tất cả quốc gia
- 🚀 **Không cần API**, hoạt động offline hoàn toàn
- ⚡ **Tốc độ cao**, xử lý ngay lập tức
- 💰 **Format tiền tệ** theo chuẩn quốc tế
- 🇻🇳 **Đọc số tiếng Việt**
- 📦 **Zero dependencies**

## 📦 Cài đặt

```bash
npm install duck-money
```

## 🚀 Sử dụng

### 📥 Import thư viện

```javascript
import currencyExchange from 'duck-money';
```

### 💱 Quy đổi tiền tệ đơn giản

```javascript
const result = currencyExchange.convert(100, 'USD', 'VND');
console.log(`100 USD = ${result} VND`);
```

### 📊 Quy đổi với thông tin chi tiết

```javascript
const result = currencyExchange.convertDetailed(100, 'USD', 'VND');
console.log(`${result.amount} ${result.fromCurrency} = ${result.convertedAmount} ${result.toCurrency}`);
console.log(`Tỷ giá: 1 ${result.fromCurrency} = ${result.rate} ${result.toCurrency}`);
```

### 🔄 Quy đổi nhiều tiền tệ

```javascript
const results = currencyExchange.convertMultiple(1000, 'EUR', ['USD', 'VND', 'JPY', 'GBP']);
console.log(results);
```

### 📈 Lấy tỷ giá

```javascript
const rate = currencyExchange.getRate('USD', 'VND');
console.log(`Tỷ giá USD/VND: ${rate}`);
```

## 🛠️ API Reference

### `convert(amount, fromCurrency, toCurrency)`
Quy đổi tiền tệ và trả về số tiền đã quy đổi
- `amount`: Số tiền cần quy đổi
- `fromCurrency`: Tiền tệ nguồn (VD: 'USD', 'EUR', 'VND')
- `toCurrency`: Tiền tệ đích

### `convertDetailed(amount, fromCurrency, toCurrency)`
Quy đổi tiền tệ với thông tin chi tiết
- Trả về object chứa: amount, fromCurrency, toCurrency, convertedAmount, rate, timestamp

### `convertMultiple(amount, fromCurrency, toCurrencies)`
Quy đổi sang nhiều tiền tệ cùng lúc
- `toCurrencies`: Mảng các tiền tệ đích
- Trả về object với key là mã tiền tệ, value là số tiền đã quy đổi

### `getRate(fromCurrency, toCurrency)`
Lấy tỷ giá giữa hai tiền tệ

### `getAllRates(baseCurrency)`
Lấy tất cả tỷ giá từ một tiền tệ cơ sở

### `getSupportedCurrencies()`
Lấy danh sách tất cả tiền tệ được hỗ trợ

### `isSupported(currency)`
Kiểm tra tiền tệ có được hỗ trợ không

### `getCurrencyInfo(currency)`
Lấy thông tin tiền tệ bằng tiếng Việt

### `searchCurrencies(searchTerm)`
Tìm kiếm tiền tệ theo tên hoặc mã

### `updateRate(fromCurrency, toCurrency, rate)`
Cập nhật tỷ giá cho một cặp tiền tệ

### `getAllExchangeRates()`
Lấy tất cả tỷ giá hiện tại

## 🌍 Tiền tệ được hỗ trợ

### 💰 Tiền tệ chính
🇺🇸 USD, 🇪🇺 EUR, 🇬🇧 GBP, 🇯🇵 JPY, 🇨🇳 CNY, 🇻🇳 VND, 🇰🇷 KRW, 🇸🇬 SGD, 🇹🇭 THB, 🇲🇾 MYR, 🇮🇩 IDR, 🇵🇭 PHP, 🇮🇳 INR, 🇦🇺 AUD, 🇨🇦 CAD, 🇨🇭 CHF, 🇳🇿 NZD, 🇸🇪 SEK, 🇳🇴 NOK, 🇩🇰 DKK, 🇵🇱 PLN, 🇨🇿 CZK, 🇭🇺 HUF, 🇷🇺 RUB, 🇹🇷 TRY, 🇧🇷 BRL, 🇲🇽 MXN, 🇿🇦 ZAR, 🇭🇰 HKD, 🇹🇼 TWD, 🇦🇪 AED, 🇸🇦 SAR, 🇶🇦 QAR, 🇰🇼 KWD, 🇧🇭 BHD, 🇴🇲 OMR, 🇯🇴 JOD, 🇱🇧 LBP, 🇪🇬 EGP, 🇳🇬 NGN, 🇬🇭 GHS, 🇰🇪 KES, 🇺🇬 UGX, 🇹🇿 TZS, 🇿🇲 ZMW, 🇧🇼 BWP, 🇳🇦 NAD, 🇲🇺 MUR, 🇸🇨 SCR, 🇲🇻 MVR, 🇱🇰 LKR, 🇧🇩 BDT, 🇳🇵 NPR, 🇵🇰 PKR, 🇦🇫 AFN, 🇮🇷 IRR, 🇮🇶 IQD, 🇸🇾 SYP, 🇾🇪 YER, 🇰🇭 KHR, 🇱🇦 LAK, 🇲🇲 MMK, 🇧🇹 BTN, 🇲🇳 MNT, 🇺🇿 UZS, 🇰🇿 KZT, 🇹🇯 TJS, 🇰🇬 KGS, 🇹🇲 TMT, 🇦🇿 AZN, 🇬🇪 GEL, 🇦🇲 AMD, 🇧🇾 BYN, 🇲🇩 MDL, 🇺🇦 UAH, 🇷🇸 RSD, 🇧🇦 BAM, 🇲🇰 MKD, 🇦🇱 ALL, 🇭🇷 HRK, 🇧🇬 BGN, 🇷🇴 RON, 🇮🇸 ISK, 🇮🇱 ILS, 🇯🇲 JMD, 🇹🇹 TTD, 🇧🇧 BBD, 🇦🇬 XCD, 🇬🇾 GYD, 🇸🇷 SRD, 🇨🇱 CLP, 🇦🇷 ARS, 🇺🇾 UYU, 🇵🇾 PYG, 🇧🇴 BOB, 🇵🇪 PEN, 🇨🇴 COP, 🇻🇪 VEF, 🇨🇷 CRC, 🇵🇦 PAB, 🇳🇮 NIO, 🇭🇳 HNL, 🇬🇹 GTQ, 🇧🇿 BZD, 🇸🇻 SVC, 🇩🇴 DOP, 🇭🇹 HTG, 🇨🇺 CUP, 🇨🇮 XOF, 🇨🇲 XAF, 🇵🇫 XPF, 🇰🇲 KMF, 🇩🇯 DJF, 🇬🇳 GNF, 🇨🇩 CDF, 🇷🇼 RWF, 🇧🇮 BIF, 🇲🇬 MGA

## 💻 Ứng dụng

### 🌐 Ứng dụng web đơn giản
Tạo form nhập số tiền và chọn tiền tệ nguồn, đích. Sử dụng method `convert()` để quy đổi và hiển thị kết quả.

### 📊 Dashboard tỷ giá
Tạo dashboard hiển thị tỷ giá của các tiền tệ chính. Sử dụng method `getRate()` để lấy tỷ giá và cập nhật định kỳ.

### 🔄 Cập nhật tỷ giá
Sử dụng method `updateRate()` để cập nhật tỷ giá theo nhu cầu. Có thể cập nhật từng cặp tiền tệ hoặc nhiều cặp cùng lúc.

## ⚙️ Cấu hình

### 🔄 Cập nhật tỷ giá
Sử dụng method `updateRate()` để cập nhật tỷ giá cho các cặp tiền tệ cụ thể.

### 🌍 Sử dụng tiền tệ cơ sở khác
Có thể sử dụng tiền tệ khác làm cơ sở thay vì USD trong method `convertDetailed()`.

## ⚡ Performance

- 🚀 **Tốc độ cao**: Không cần gọi API, xử lý ngay lập tức
- 🌐 **Không phụ thuộc mạng**: Hoạt động offline hoàn toàn
- 💾 **Memory efficient**: Tỷ giá được lưu trong memory
- 🛡️ **Error handling**: Xử lý lỗi gracefully

## 🔒 Bảo mật

- 🔐 **Không lưu trữ thông tin nhạy cảm**
- 🌐 **Không gửi dữ liệu ra ngoài**
- ✅ **Validate input** để tránh injection attacks
- 🏠 **Hoạt động hoàn toàn local**

## 🤝 Đóng góp

1. 🍴 Fork repository
2. 🌿 Tạo feature branch
3. 💾 Commit changes
4. 📤 Push to branch
5. 🔄 Tạo Pull Request

## 📄 License

[MIT License](LICENSE)

## 🆘 Hỗ trợ

- 📧 **Email**: support@currency-exchange-js.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/dragonkingl6/)

## 🙏 Cảm ơn

Cảm ơn bạn đã sử dụng **Duck Money**! Nếu thư viện này hữu ích, hãy cho chúng tôi một ⭐ trên GitHub.

---

<div align="center">

**Made with ❤️ for the Vietnamese developer community**

[![GitHub stars](https://img.shields.io/github/stars/dragonkingl6/duck-money?style=social)](https://github.com/dragonkingl6/duck-money)
[![GitHub forks](https://img.shields.io/github/forks/dragonkingl6/duck-money?style=social)](https://github.com/dragonkingl6/duck-money)

</div>
