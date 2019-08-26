{
  "config": {
    "databases": "{{database}}",
    "files": "{files}",
    "log": "{log}",
    "hosts": "array",
    "mail": "{mail}",
    "routes": "{{route}}",
    "sessions": "{sessions}",
    "sandbox": "{sandbox}",
    "_other": "*"
  },
  "application": {
    "slowTime": "2s:duration",
    "preload": "false:boolean",
    "allowOrigin": "[string]",
    "rpsPerIP": "[number]"
  },
  "database": {
    "alias": "[string]",
    "url": "string",
    "collections": "[array]",
    "slowTime": "2s:duration",
    "security": "false:boolean"
  },
  "files": {
    "minify": "false:boolean",
    "cacheSize": "100mb:size",
    "cacheMaxFileSize": "1mb:size",
    "gzip": "true:boolean",
    "preprocess": "[array]",
    "index": "false:boolean"
  },
  "log": {
    "enabled": "false:boolean",
    "keepDays": "100:number",
    "writeInterval": "5s:duration",
    "writeBuffer": "64kb:size",
    "files": "[array]",
    "stdout": "[array]"
  },
  "sandbox": {
    "global": "[array]",
    "api": "[array]",
    "export": "[array]",
    "import": "[hash]"
  },
  "mail": {
    "enabled": "false:boolean",
    "robot": "string",
    "options": "{mailOptions}"
  },
  "mailOptions": {
    "service": "string",
    "auth": "{mailAuth}"
  },
  "mailAuth": {
    "user": "string",
    "pass": "string"
  },
  "route": {
    "url": "string",
    "rewrite": "string",
    "escaping": "true:boolean"
  },
  "sessions": {
    "anonymous": "false:boolean",
    "cookie": "SID:string",
    "characters": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:string",
    "secret": "secret:string",
    "length": "64:number",
    "persist": "true:boolean",
    "perIpLimit": "20:number",
    "confirmTime": "1d:duration",
    "expireTime": "10d:duration",
    "perUserLimit": "5:number"
  }
}