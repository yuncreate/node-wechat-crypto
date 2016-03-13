/**
 * Created by mengkeys on 2016-03-12.
 */
const WXCrypotUtils  = require('node-wechat-utils');

const WXCrypto = function (token, encodingAESKey, appId) {
    this.token = token;
    this.encodingAESkey = encodingAESKey;
    this.appId = appId;
};


// 微信消息加密
WXCrypto.prototype.encode = function () {

};

// 微信消息解密
WXCrypto.prototype.decode = function () {

};

// 微信签名
// @param {String} timestamp   时间戳
// @param {String} nonce       随机串
WXCrypto.prototype.signature = function (timestamp,nonce) {
    var str = [this.token, timestamp, nonce].sort().join(',');
    return WXCrypotUtils.sha1(str);
};

// 微信签名验证
WXCrypto.prototype.verify = function (timestamp, nonce, signature) {
    return signature == WXCrypotUtils.sha1([this.token, timestamp, nonce].sort().join(','));
};

module.exports = function (token, encodingAESKey, appId) {
    return new WXCrypt(token, encodingAESKey, appId);
};
