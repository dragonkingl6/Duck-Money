/**
 * Thư viện quy đổi tiền tệ bằng JavaScript thuần
 * Không sử dụng API bên ngoài, tỷ giá được lưu cố định trong code
 */
class CurrencyExchange {
  constructor() {
    // Tỷ giá cố định (cập nhật định kỳ)
    this.exchangeRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.50,
        CNY: 6.45,
        KRW: 1180.00,
        SGD: 1.35,
        THB: 33.50,
        MYR: 4.15,
        IDR: 14250.00,
        PHP: 50.25,
        INR: 74.50,
        AUD: 1.38,
        CAD: 1.25,
        CHF: 0.92,
        NZD: 1.42,
        SEK: 8.65,
        NOK: 8.45,
        DKK: 6.25,
        PLN: 3.85,
        CZK: 21.50,
        HUF: 305.00,
        RUB: 75.50,
        TRY: 8.85,
        BRL: 5.25,
        MXN: 20.15,
        ZAR: 15.25,
        VND: 24000.00,
        HKD: 7.75,
        TWD: 27.85,
        AED: 3.67,
        SAR: 3.75,
        QAR: 3.64,
        KWD: 0.30,
        BHD: 0.38,
        OMR: 0.38,
        JOD: 0.71,
        LBP: 1507.50,
        EGP: 15.65,
        NGN: 410.00,
        GHS: 6.15,
        KES: 110.25,
        UGX: 3550.00,
        TZS: 2300.00,
        ZMW: 18.50,
        BWP: 11.25,
        NAD: 15.25,
        MUR: 40.50,
        SCR: 20.75,
        MVR: 15.45,
        LKR: 200.00,
        BDT: 85.25,
        NPR: 120.50,
        PKR: 155.75,
        AFN: 78.50,
        IRR: 42000.00,
        IQD: 1460.00,
        SYP: 1250.00,
        YER: 250.00,
        KHR: 4100.00,
        LAK: 9500.00,
        MMK: 1650.00,
        BTN: 74.50,
        MNT: 2850.00,
        UZS: 10500.00,
        KZT: 420.00,
        TJS: 11.25,
        KGS: 84.50,
        TMT: 3.50,
        AZN: 1.70,
        GEL: 3.15,
        AMD: 480.00,
        BYN: 2.55,
        MDL: 17.85,
        UAH: 27.25,
        RSD: 100.00,
        BAM: 1.65,
        MKD: 51.50,
        ALL: 105.00,
        HRK: 6.25,
        BGN: 1.65,
        RON: 4.15,
        ISK: 125.00,
        ILS: 3.25,
        JMD: 155.00,
        TTD: 6.75,
        BBD: 2.00,
        XCD: 2.70,
        GYD: 209.00,
        SRD: 21.50,
        CLP: 850.00,
        ARS: 100.50,
        UYU: 42.50,
        PYG: 7000.00,
        BOB: 6.90,
        PEN: 4.15,
        COP: 3800.00,
        VEF: 2500000.00,
        CRC: 620.00,
        PAB: 1.00,
        NIO: 35.50,
        HNL: 24.50,
        GTQ: 7.75,
        BZD: 2.00,
        SVC: 8.75,
        DOP: 58.50,
        HTG: 100.00,
        CUP: 25.00,
        XOF: 550.00,
        XAF: 550.00,
        XPF: 100.00,
        KMF: 440.00,
        DJF: 177.70,
        GNF: 10200.00,
        CDF: 2000.00,
        RWF: 1000.00,
        BIF: 2000.00,
        MGA: 4000.00,

      }
    };

    // Tạo tỷ giá cho tất cả các cặp tiền tệ
    this.generateAllRates();
    
    this.supportedCurrencies = {
      'USD': 'Đô la Mỹ',
      'EUR': 'Euro',
      'GBP': 'Bảng Anh',
      'JPY': 'Yên Nhật',
      'CNY': 'Nhân dân tệ',
      'KRW': 'Won Hàn Quốc',
      'SGD': 'Đô la Singapore',
      'THB': 'Baht Thái',
      'MYR': 'Ringgit Malaysia',
      'IDR': 'Rupiah Indonesia',
      'PHP': 'Peso Philippines',
      'INR': 'Rupee Ấn Độ',
      'AUD': 'Đô la Úc',
      'CAD': 'Đô la Canada',
      'CHF': 'Franc Thụy Sĩ',
      'NZD': 'Đô la New Zealand',
      'SEK': 'Krona Thụy Điển',
      'NOK': 'Krone Na Uy',
      'DKK': 'Krone Đan Mạch',
      'PLN': 'Zloty Ba Lan',
      'CZK': 'Koruna Séc',
      'HUF': 'Forint Hungary',
      'RUB': 'Ruble Nga',
      'TRY': 'Lira Thổ Nhĩ Kỳ',
      'BRL': 'Real Brazil',
      'MXN': 'Peso Mexico',
      'ZAR': 'Rand Nam Phi',
      'VND': 'Đồng Việt Nam',
      'HKD': 'Đô la Hong Kong',
      'TWD': 'Đô la Đài Loan',
      'AED': 'Dirham UAE',
      'SAR': 'Riyal Saudi Arabia',
      'QAR': 'Riyal Qatar',
      'KWD': 'Dinar Kuwait',
      'BHD': 'Dinar Bahrain',
      'OMR': 'Rial Oman',
      'JOD': 'Dinar Jordan',
      'LBP': 'Pound Lebanon',
      'EGP': 'Pound Ai Cập',
      'NGN': 'Naira Nigeria',
      'GHS': 'Cedi Ghana',
      'KES': 'Shilling Kenya',
      'UGX': 'Shilling Uganda',
      'TZS': 'Shilling Tanzania',
      'ZMW': 'Kwacha Zambia',
      'BWP': 'Pula Botswana',
      'NAD': 'Dollar Namibia',
      'MUR': 'Rupee Mauritius',
      'SCR': 'Rupee Seychelles',
      'MVR': 'Rufiyaa Maldives',
      'LKR': 'Rupee Sri Lanka',
      'BDT': 'Taka Bangladesh',
      'NPR': 'Rupee Nepal',
      'PKR': 'Rupee Pakistan',
      'AFN': 'Afghani Afghanistan',
      'IRR': 'Rial Iran',
      'IQD': 'Dinar Iraq',
      'SYP': 'Pound Syria',
      'YER': 'Rial Yemen',
      'KHR': 'Riel Campuchia',
      'LAK': 'Kip Lào',
      'MMK': 'Kyat Myanmar',
      'BTN': 'Ngultrum Bhutan',
      'MNT': 'Tugrik Mông Cổ',
      'UZS': 'Som Uzbekistan',
      'KZT': 'Tenge Kazakhstan',
      'TJS': 'Somoni Tajikistan',
      'KGS': 'Som Kyrgyzstan',
      'TMT': 'Manat Turkmenistan',
      'AZN': 'Manat Azerbaijan',
      'GEL': 'Lari Georgia',
      'AMD': 'Dram Armenia',
      'BYN': 'Ruble Belarus',
      'MDL': 'Leu Moldova',
      'UAH': 'Hryvnia Ukraine',
      'RSD': 'Dinar Serbia',
      'BAM': 'Mark Bosnia',
      'MKD': 'Denar Macedonia',
      'ALL': 'Lek Albania',
      'HRK': 'Kuna Croatia',
      'BGN': 'Lev Bulgaria',
      'RON': 'Leu Romania',
      'ISK': 'Krona Iceland',
      'ILS': 'Shekel Israel',
      'JMD': 'Dollar Jamaica',
      'TTD': 'Dollar Trinidad',
      'BBD': 'Dollar Barbados',
      'XCD': 'Dollar Đông Caribe',
      'GYD': 'Dollar Guyana',
      'SRD': 'Dollar Suriname',
      'CLP': 'Peso Chile',
      'ARS': 'Peso Argentina',
      'UYU': 'Peso Uruguay',
      'PYG': 'Guarani Paraguay',
      'BOB': 'Boliviano Bolivia',
      'PEN': 'Sol Peru',
      'COP': 'Peso Colombia',
      'VEF': 'Bolivar Venezuela',
      'CRC': 'Colon Costa Rica',
      'PAB': 'Balboa Panama',
      'NIO': 'Cordoba Nicaragua',
      'HNL': 'Lempira Honduras',
      'GTQ': 'Quetzal Guatemala',
      'BZD': 'Dollar Belize',
      'SVC': 'Colon El Salvador',
      'DOP': 'Peso Dominican',
      'HTG': 'Gourde Haiti',
      'CUP': 'Peso Cuba',
      'XOF': 'Franc CFA Tây Phi',
      'XAF': 'Franc CFA Trung Phi',
      'XPF': 'Franc CFP',
      'KMF': 'Franc Comoros',
      'DJF': 'Franc Djibouti',
      'GNF': 'Franc Guinea',
      'CDF': 'Franc Congo',
      'RWF': 'Franc Rwanda',
      'BIF': 'Franc Burundi',
      'MGA': 'Ariary Madagascar',
      
    };
  }

  /**
   * Tạo tỷ giá cho tất cả các cặp tiền tệ
   */
  generateAllRates() {
    const currencies = Object.keys(this.exchangeRates.USD);
    
    // Thêm USD vào danh sách
    currencies.push('USD');
    
    // Tạo tỷ giá cho tất cả các cặp
    for (const fromCurrency of currencies) {
      if (!this.exchangeRates[fromCurrency]) {
        this.exchangeRates[fromCurrency] = {};
      }
      
      for (const toCurrency of currencies) {
        if (fromCurrency === toCurrency) {
          this.exchangeRates[fromCurrency][toCurrency] = 1;
        } else if (fromCurrency === 'USD') {
          // Từ USD sang tiền tệ khác
          this.exchangeRates[fromCurrency][toCurrency] = this.exchangeRates.USD[toCurrency];
        } else if (toCurrency === 'USD') {
          // Từ tiền tệ khác sang USD
          this.exchangeRates[fromCurrency][toCurrency] = 1 / this.exchangeRates.USD[fromCurrency];
        } else {
          // Từ tiền tệ A sang tiền tệ B (qua USD)
          const usdToFrom = 1 / this.exchangeRates.USD[fromCurrency];
          const usdToTo = this.exchangeRates.USD[toCurrency];
          this.exchangeRates[fromCurrency][toCurrency] = usdToFrom * usdToTo;
        }
      }
    }
  }

  /**
   * Lấy danh sách tất cả tiền tệ được hỗ trợ
   * @returns {Object} Danh sách tiền tệ với mã và tên tiếng Việt
   */
  getSupportedCurrencies() {
    return this.supportedCurrencies;
  }

  /**
   * Kiểm tra xem tiền tệ có được hỗ trợ không
   * @param {string} currency - Mã tiền tệ (VD: USD, EUR, VND)
   * @returns {boolean} True nếu được hỗ trợ
   */
  isSupported(currency) {
    return currency.toUpperCase() in this.supportedCurrencies;
  }

  /**
   * Lấy tỷ giá từ dữ liệu cố định
   * @param {string} baseCurrency - Tiền tệ cơ sở (VD: USD)
   * @returns {Object} Dữ liệu tỷ giá
   */
  getExchangeRates(baseCurrency = 'USD') {
    const rates = this.exchangeRates[baseCurrency.toUpperCase()];
    if (!rates) {
      throw new Error(`Không có tỷ giá cho ${baseCurrency}`);
    }
    
    return {
      base: baseCurrency.toUpperCase(),
      rates: rates,
      time_last_updated: Math.floor(Date.now() / 1000)
    };
  }

  /**
   * Quy đổi tiền tệ - API đơn giản
   * @param {number} amount - Số tiền cần quy đổi
   * @param {string} fromCurrency - Tiền tệ nguồn (VD: 'USD', 'EUR', 'VND')
   * @param {string} toCurrency - Tiền tệ đích (VD: 'USD', 'EUR', 'VND')
   * @returns {number} Số tiền đã quy đổi
   */
  convert(amount, fromCurrency, toCurrency) {
    if (!this.isSupported(fromCurrency)) {
      throw new Error(`Tiền tệ nguồn ${fromCurrency} không được hỗ trợ`);
    }
    
    if (!this.isSupported(toCurrency)) {
      throw new Error(`Tiền tệ đích ${toCurrency} không được hỗ trợ`);
    }

    if (amount <= 0) {
      throw new Error('Số tiền phải lớn hơn 0');
    }

    try {
      const fromRate = this.exchangeRates[fromCurrency.toUpperCase()];
      const toRate = fromRate[toCurrency.toUpperCase()];
      
      if (!toRate) {
        throw new Error('Không thể lấy tỷ giá cho một trong các tiền tệ');
      }

      // Quy đổi trực tiếp
      const convertedAmount = amount * toRate;
      
      return Math.round(convertedAmount * 1000000) / 1000000; // Làm tròn 6 chữ số thập phân
    } catch (error) {
      throw new Error(`Lỗi quy đổi: ${error.message}`);
    }
  }

  /**
   * Quy đổi tiền tệ với thông tin chi tiết
   * @param {number} amount - Số tiền cần quy đổi
   * @param {string} fromCurrency - Tiền tệ nguồn
   * @param {string} toCurrency - Tiền tệ đích
   * @param {string} baseCurrency - Tiền tệ cơ sở (mặc định: USD)
   * @returns {Object} Kết quả quy đổi chi tiết
   */
  convertDetailed(amount, fromCurrency, toCurrency, baseCurrency = 'USD') {
    if (!this.isSupported(fromCurrency)) {
      throw new Error(`Tiền tệ nguồn ${fromCurrency} không được hỗ trợ`);
    }
    
    if (!this.isSupported(toCurrency)) {
      throw new Error(`Tiền tệ đích ${toCurrency} không được hỗ trợ`);
    }

    if (amount <= 0) {
      throw new Error('Số tiền phải lớn hơn 0');
    }

    try {
      const fromRate = this.exchangeRates[fromCurrency.toUpperCase()];
      const toRate = fromRate[toCurrency.toUpperCase()];
      
      if (!toRate) {
        throw new Error('Không thể lấy tỷ giá cho một trong các tiền tệ');
      }

      // Quy đổi trực tiếp
      const convertedAmount = amount * toRate;
      
      return {
        amount: amount,
        fromCurrency: fromCurrency.toUpperCase(),
        toCurrency: toCurrency.toUpperCase(),
        convertedAmount: Math.round(convertedAmount * 1000000) / 1000000, // Làm tròn 6 chữ số thập phân
        rate: toRate,
        timestamp: Math.floor(Date.now() / 1000),
        baseCurrency: baseCurrency.toUpperCase()
      };
    } catch (error) {
      throw new Error(`Lỗi quy đổi: ${error.message}`);
    }
  }

  /**
   * Quy đổi nhiều tiền tệ cùng lúc - API đơn giản
   * @param {number} amount - Số tiền cần quy đổi
   * @param {string} fromCurrency - Tiền tệ nguồn
   * @param {Array<string>} toCurrencies - Danh sách tiền tệ đích
   * @returns {Object} Kết quả quy đổi dạng object
   */
  convertMultiple(amount, fromCurrency, toCurrencies) {
    const results = {};
    
    for (const toCurrency of toCurrencies) {
      try {
        const convertedAmount = this.convert(amount, fromCurrency, toCurrency);
        results[toCurrency] = convertedAmount;
      } catch (error) {
        results[toCurrency] = { error: error.message };
      }
    }
    
    return results;
  }

  /**
   * Quy đổi nhiều tiền tệ với thông tin chi tiết
   * @param {number} amount - Số tiền cần quy đổi
   * @param {string} fromCurrency - Tiền tệ nguồn
   * @param {Array<string>} toCurrencies - Danh sách tiền tệ đích
   * @param {string} baseCurrency - Tiền tệ cơ sở
   * @returns {Array} Danh sách kết quả quy đổi chi tiết
   */
  convertMultipleDetailed(amount, fromCurrency, toCurrencies, baseCurrency = 'USD') {
    const results = [];
    
    for (const toCurrency of toCurrencies) {
      try {
        const result = this.convertDetailed(amount, fromCurrency, toCurrency, baseCurrency);
        results.push(result);
      } catch (error) {
        results.push({
          amount: amount,
          fromCurrency: fromCurrency.toUpperCase(),
          toCurrency: toCurrency.toUpperCase(),
          error: error.message
        });
      }
    }
    
    return results;
  }

  /**
   * Lấy tỷ giá hiện tại giữa hai tiền tệ
   * @param {string} fromCurrency - Tiền tệ nguồn
   * @param {string} toCurrency - Tiền tệ đích
   * @param {string} baseCurrency - Tiền tệ cơ sở
   * @returns {number} Tỷ giá
   */
  getRate(fromCurrency, toCurrency, baseCurrency = 'USD') {
    const result = this.convertDetailed(1, fromCurrency, toCurrency, baseCurrency);
    return result.rate;
  }

  /**
   * Lấy tỷ giá cho tất cả tiền tệ từ một tiền tệ cơ sở
   * @param {string} baseCurrency - Tiền tệ cơ sở
   * @returns {Object} Tất cả tỷ giá
   */
  getAllRates(baseCurrency = 'USD') {
    return this.getExchangeRates(baseCurrency);
  }

  /**
   * Cập nhật tỷ giá cho một cặp tiền tệ
   * @param {string} fromCurrency - Tiền tệ nguồn
   * @param {string} toCurrency - Tiền tệ đích
   * @param {number} rate - Tỷ giá mới
   */
  updateRate(fromCurrency, toCurrency, rate) {
    if (!this.exchangeRates[fromCurrency.toUpperCase()]) {
      this.exchangeRates[fromCurrency.toUpperCase()] = {};
    }
    this.exchangeRates[fromCurrency.toUpperCase()][toCurrency.toUpperCase()] = rate;
  }

  /**
   * Lấy tất cả tỷ giá hiện tại
   * @returns {Object} Tất cả tỷ giá
   */
  getAllExchangeRates() {
    return this.exchangeRates;
  }

  /**
   * Lấy thông tin tiền tệ
   * @param {string} currency - Mã tiền tệ
   * @returns {string|null} Tên tiền tệ bằng tiếng Việt
   */
  getCurrencyInfo(currency) {
    return this.supportedCurrencies[currency.toUpperCase()] || null;
  }

  /**
   * Tìm kiếm tiền tệ theo tên
   * @param {string} searchTerm - Từ khóa tìm kiếm
   * @returns {Array} Danh sách tiền tệ phù hợp
   */
  searchCurrencies(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase();
    
    for (const [code, name] of Object.entries(this.supportedCurrencies)) {
      if (code.toLowerCase().includes(term) || name.toLowerCase().includes(term)) {
        results.push({ code, name });
      }
    }
    
    return results;
  }
}

// Tạo instance mặc định
const currencyExchange = new CurrencyExchange();

// Export class và instance
export default currencyExchange;
export { CurrencyExchange };
