# EZVersion
EZVersion, an easy version compare tool.

Compare [semver](http://semver.org/) version strings to find greater, equal or lesser.  
Runs in the browser as well as Node.js.


## API
- EZVersion.gt()
- EZVersion.lt()
- EZVersion.equal()
- EZVersion.gte()
- EZVersion.lte()


## Usage
```javascript
// greater than
EZVersion('3.0.0').gt('2.0.1')     // true
EZVersion('3.0.0').gt('9.0.1')     // false

// equal
EZVersion('3.0.0').equal('3.0.0')  // true
EZVersion('3.0.0').equal('2.0.0')  // false

// less than
EZVersion('3.0.0').lt('4.1.1')     // true
EZVersion('3.0.0').lt('2.1.1')     // false

// greater than or equal
EZVersion('3.0.0').gte('2.1.1')    // true
EZVersion('3.0.0').gte('3.0.1')    // false

// less than or equal
EZVersion('3.0.0').lte('3.0.0')    // true
EZVersion('3.0.0').lte('2.9.0')    // false
```

## 广告(AD)
- 这可能是东半球最好用的版本对比工具，也许在西半球也是。
- 我们重新定义了版本对比。
如果你不信，请参考：[compare-versions](https://www.npmjs.com/package/compare-versions)，他的 API 看起来可就没有如此简洁明了。
```
compareVersions('10.1.1', '10.2.2');
```
他存在的问题：
- 传入两个版本号，谁是基准？
- 返回值是什么？一眼看不出来吧？
- 他的返回值，参与到 ```if```运算中，代码可读性怎样？

### EZVersion VS compareVersions
```
// EZVersion
var version = EZVersion(getAppVersion())
if (version.lt('2.1.0')) {
	// show update App tip
}

// compareVersions
var version = getAppVersion()
if (compareVersions(version, '2.1.0') === -1) {
	// show update App tip
}

// 实现同样的功能，从代码可读性来说， compareVersions 可就不是那么直观了
```




