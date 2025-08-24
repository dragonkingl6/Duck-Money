# 🦆 Duck Money

> Thư viện quy đổi tiền tệ

[![npm version](https://badge.fury.io/js/duck-money.svg)](https://badge.fury.io/js/duck-money)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ Tính năng

- 🌍 **Hỗ trợ 150+ tiền tệ** từ tất cả quốc gia
- 🚀 **Không cần API**, hoạt động offline hoàn toàn
- ⚡ **Tốc độ cao**, xử lý ngay lập tức
- 💰 **Format tiền tệ** theo chuẩn quốc tế

## 📦 Cài đặt

```bash
npm install duck-money
```

## 🚀 Sử dụng

### 📥 Import thư viện

```javascript
import currencyExchange from 'duck-money';
```



### 📊 Quy đổi với thông tin chi tiết

```javascript
const result = currencyExchange.convertDetailed(100, 'USD', 'VND');
console.log(`${result.amount} ${result.fromCurrency} = ${result.convertedAmount} ${result.toCurrency}`);
console.log(`Format K,M,B,T: ${result.convertedAmountFormat}`);
console.log(`Format với dấu phẩy: ${result.convertedAmountCommas}`);
console.log(`Tỷ giá: 1 ${result.fromCurrency} = ${result.rate} ${result.toCurrency}`);
```

### 🔄 Quy đổi nhiều tiền tệ

```javascript
const results = currencyExchange.convertMultiple(1000, 'EUR', ['USD', 'VND', 'JPY', 'GBP']);
console.log(results);
// Kết quả:
// {
//   USD: { amount: 1180, format: "1.2K", commas: "1,180" },
//   VND: { amount: 24000000, format: "24M", commas: "24,000,000" },
//   JPY: { amount: 130900, format: "130.9K", commas: "130,900" },
//   GBP: { amount: 861.8, format: "861.8", commas: "861.8" }
// }

// Sử dụng kết quả
console.log(`USD: ${results.USD.amount} (${results.USD.format})`);
console.log(`VND: ${results.VND.commas}`);
```

### 📈 Lấy tỷ giá

```javascript
const rate = currencyExchange.getRate('USD', 'VND');
console.log(`Tỷ giá USD/VND: ${rate}`);
```

### `convertDetailed(amount, fromCurrency, toCurrency)`
Quy đổi tiền tệ với thông tin chi tiết
- Trả về object chứa: amount, fromCurrency, toCurrency, convertedAmount, convertedAmountFormat, convertedAmountCommas, rate, timestamp

### `convertMultiple(amount, fromCurrency, toCurrencies)`
Quy đổi sang nhiều tiền tệ cùng lúc với các dạng format
- `toCurrencies`: Mảng các tiền tệ đích
- Trả về object với key là mã tiền tệ, value là object chứa: amount, format, commas

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


## 🌍 Tiền tệ được hỗ trợ

### 💰 Tiền tệ chính
🇺🇸 USD, 🇪🇺 EUR, 🇬🇧 GBP, 🇯🇵 JPY, 🇨🇳 CNY, 🇻🇳 VND, 🇰🇷 KRW, 🇸🇬 SGD, 🇹🇭 THB, 🇲🇾 MYR, 🇮🇩 IDR, 🇵🇭 PHP, 🇮🇳 INR, 🇦🇺 AUD, 🇨🇦 CAD, 🇨🇭 CHF, 🇳🇿 NZD, 🇸🇪 SEK, 🇳🇴 NOK, 🇩🇰 DKK, 🇵🇱 PLN, 🇨🇿 CZK, 🇭🇺 HUF, 🇷🇺 RUB, 🇹🇷 TRY, 🇧🇷 BRL, 🇲🇽 MXN, 🇿🇦 ZAR, 🇭🇰 HKD, 🇹🇼 TWD, 🇦🇪 AED, 🇸🇦 SAR, 🇶🇦 QAR, 🇰🇼 KWD, 🇧🇭 BHD, 🇴🇲 OMR, 🇯🇴 JOD, 🇱🇧 LBP, 🇪🇬 EGP, 🇳🇬 NGN, 🇬🇭 GHS, 🇰🇪 KES, 🇺🇬 UGX, 🇹🇿 TZS, 🇿🇲 ZMW, 🇧🇼 BWP, 🇳🇦 NAD, 🇲🇺 MUR, 🇸🇨 SCR, 🇲🇻 MVR, 🇱🇰 LKR, 🇧🇩 BDT, 🇳🇵 NPR, 🇵🇰 PKR, 🇦🇫 AFN, 🇮🇷 IRR, 🇮🇶 IQD, 🇸🇾 SYP, 🇾🇪 YER, 🇰🇭 KHR, 🇱🇦 LAK, 🇲🇲 MMK, 🇧🇹 BTN, 🇲🇳 MNT, 🇺🇿 UZS, 🇰🇿 KZT, 🇹🇯 TJS, 🇰🇬 KGS, 🇹🇲 TMT, 🇦🇿 AZN, 🇬🇪 GEL, 🇦🇲 AMD, 🇧🇾 BYN, 🇲🇩 MDL, 🇺🇦 UAH, 🇷🇸 RSD, 🇧🇦 BAM, 🇲🇰 MKD, 🇦🇱 ALL, 🇭🇷 HRK, 🇧🇬 BGN, 🇷🇴 RON, 🇮🇸 ISK, 🇮🇱 ILS, 🇯🇲 JMD, 🇹🇹 TTD, 🇧🇧 BBD, 🇦🇬 XCD, 🇬🇾 GYD, 🇸🇷 SRD, 🇨🇱 CLP, 🇦🇷 ARS, 🇺🇾 UYU, 🇵🇾 PYG, 🇧🇴 BOB, 🇵🇪 PEN, 🇨🇴 COP, 🇻🇪 VEF, 🇨🇷 CRC, 🇵🇦 PAB, 🇳🇮 NIO, 🇭🇳 HNL, 🇬🇹 GTQ, 🇧🇿 BZD, 🇸🇻 SVC, 🇩🇴 DOP, 🇭🇹 HTG, 🇨🇺 CUP, 🇨🇮 XOF, 🇨🇲 XAF, 🇵🇫 XPF, 🇰🇲 KMF, 🇩🇯 DJF, 🇬🇳 GNF, 🇨🇩 CDF, 🇷🇼 RWF, 🇧🇮 BIF, 🇲🇬 MGA

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
- 📖 **Documentation**: [Wiki](https://github.com/dragonkingl6/Duck-Money/)

## 🙏 Cảm ơn

Cảm ơn bạn đã sử dụng **Duck Money**! Nếu thư viện này hữu ích, hãy cho chúng tôi một ⭐ trên GitHub.

---

<div align="center">

**Made with ❤️ for the Vietnamese developer community**

[![GitHub stars](https://img.shields.io/github/stars/dragonkingl6/Duck-Money?style=social)](https://github.com/dragonkingl6/Duck-Money)
[![GitHub forks](https://img.shields.io/github/forks/dragonkingl6/Duck-Money?style=social)](https://github.com/dragonkingl6/Duck-Money)

</div>
