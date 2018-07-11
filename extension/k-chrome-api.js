if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'k-chrome-api'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'k-chrome-api'.");
}
this['k-chrome-api'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  ScriptDetails$Code.prototype = Object.create(ScriptDetails.prototype);
  ScriptDetails$Code.prototype.constructor = ScriptDetails$Code;
  ScriptDetails$File.prototype = Object.create(ScriptDetails.prototype);
  ScriptDetails$File.prototype.constructor = ScriptDetails$File;
  function RuntimeError(message) {
    this.message = message;
  }
  RuntimeError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuntimeError',
    interfaces: []
  };
  RuntimeError.prototype.component1 = function () {
    return this.message;
  };
  RuntimeError.prototype.copy_61zpoe$ = function (message) {
    return new RuntimeError(message === void 0 ? this.message : message);
  };
  RuntimeError.prototype.toString = function () {
    return 'RuntimeError(message=' + Kotlin.toString(this.message) + ')';
  };
  RuntimeError.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.message) | 0;
    return result;
  };
  RuntimeError.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.message, other.message))));
  };
  function RuntimeMessage(action, source) {
    this.action = action;
    this.source = source;
  }
  RuntimeMessage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuntimeMessage',
    interfaces: []
  };
  RuntimeMessage.prototype.component1 = function () {
    return this.action;
  };
  RuntimeMessage.prototype.component2 = function () {
    return this.source;
  };
  RuntimeMessage.prototype.copy_bm4g0d$ = function (action, source) {
    return new RuntimeMessage(action === void 0 ? this.action : action, source === void 0 ? this.source : source);
  };
  RuntimeMessage.prototype.toString = function () {
    return 'RuntimeMessage(action=' + Kotlin.toString(this.action) + (', source=' + Kotlin.toString(this.source)) + ')';
  };
  RuntimeMessage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    return result;
  };
  RuntimeMessage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.action, other.action) && Kotlin.equals(this.source, other.source)))));
  };
  function ScriptDetails() {
  }
  function ScriptDetails$Code(code) {
    ScriptDetails.call(this);
    this.code = code;
  }
  ScriptDetails$Code.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Code',
    interfaces: [ScriptDetails]
  };
  ScriptDetails$Code.prototype.component1 = function () {
    return this.code;
  };
  ScriptDetails$Code.prototype.copy_61zpoe$ = function (code) {
    return new ScriptDetails$Code(code === void 0 ? this.code : code);
  };
  ScriptDetails$Code.prototype.toString = function () {
    return 'Code(code=' + Kotlin.toString(this.code) + ')';
  };
  ScriptDetails$Code.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  ScriptDetails$Code.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.code, other.code))));
  };
  function ScriptDetails$File(file) {
    ScriptDetails.call(this);
    this.file = file;
  }
  ScriptDetails$File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'File',
    interfaces: [ScriptDetails]
  };
  ScriptDetails$File.prototype.component1 = function () {
    return this.file;
  };
  ScriptDetails$File.prototype.copy_61zpoe$ = function (file) {
    return new ScriptDetails$File(file === void 0 ? this.file : file);
  };
  ScriptDetails$File.prototype.toString = function () {
    return 'File(file=' + Kotlin.toString(this.file) + ')';
  };
  ScriptDetails$File.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    return result;
  };
  ScriptDetails$File.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.file, other.file))));
  };
  ScriptDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScriptDetails',
    interfaces: []
  };
  function ZoomSettings() {
  }
  ZoomSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZoomSettings',
    interfaces: []
  };
  function TabSample(id, index, windowId, openerTabId, url, active, currentWindow, highlighted, pinned, audible, discarded, autoDiscardable, mutedInfo, title, favIconUrl, status, incognito, width, height, sessionId) {
    if (id === void 0)
      id = null;
    if (index === void 0)
      index = null;
    if (windowId === void 0)
      windowId = null;
    if (openerTabId === void 0)
      openerTabId = null;
    if (url === void 0)
      url = null;
    if (active === void 0)
      active = null;
    if (currentWindow === void 0)
      currentWindow = null;
    if (highlighted === void 0)
      highlighted = null;
    if (pinned === void 0)
      pinned = null;
    if (audible === void 0)
      audible = null;
    if (discarded === void 0)
      discarded = null;
    if (autoDiscardable === void 0)
      autoDiscardable = null;
    if (mutedInfo === void 0)
      mutedInfo = null;
    if (title === void 0)
      title = null;
    if (favIconUrl === void 0)
      favIconUrl = null;
    if (status === void 0)
      status = null;
    if (incognito === void 0)
      incognito = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (sessionId === void 0)
      sessionId = null;
    this.id = id;
    this.index = index;
    this.windowId = windowId;
    this.openerTabId = openerTabId;
    this.url = url;
    this.active = active;
    this.currentWindow = currentWindow;
    this.highlighted = highlighted;
    this.pinned = pinned;
    this.audible = audible;
    this.discarded = discarded;
    this.autoDiscardable = autoDiscardable;
    this.mutedInfo = mutedInfo;
    this.title = title;
    this.favIconUrl = favIconUrl;
    this.status = status;
    this.incognito = incognito;
    this.width = width;
    this.height = height;
    this.sessionId = sessionId;
  }
  TabSample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TabSample',
    interfaces: []
  };
  TabSample.prototype.component1 = function () {
    return this.id;
  };
  TabSample.prototype.component2 = function () {
    return this.index;
  };
  TabSample.prototype.component3 = function () {
    return this.windowId;
  };
  TabSample.prototype.component4 = function () {
    return this.openerTabId;
  };
  TabSample.prototype.component5 = function () {
    return this.url;
  };
  TabSample.prototype.component6 = function () {
    return this.active;
  };
  TabSample.prototype.component7 = function () {
    return this.currentWindow;
  };
  TabSample.prototype.component8 = function () {
    return this.highlighted;
  };
  TabSample.prototype.component9 = function () {
    return this.pinned;
  };
  TabSample.prototype.component10 = function () {
    return this.audible;
  };
  TabSample.prototype.component11 = function () {
    return this.discarded;
  };
  TabSample.prototype.component12 = function () {
    return this.autoDiscardable;
  };
  TabSample.prototype.component13 = function () {
    return this.mutedInfo;
  };
  TabSample.prototype.component14 = function () {
    return this.title;
  };
  TabSample.prototype.component15 = function () {
    return this.favIconUrl;
  };
  TabSample.prototype.component16 = function () {
    return this.status;
  };
  TabSample.prototype.component17 = function () {
    return this.incognito;
  };
  TabSample.prototype.component18 = function () {
    return this.width;
  };
  TabSample.prototype.component19 = function () {
    return this.height;
  };
  TabSample.prototype.component20 = function () {
    return this.sessionId;
  };
  TabSample.prototype.copy_20kwfg$ = function (id, index, windowId, openerTabId, url, active, currentWindow, highlighted, pinned, audible, discarded, autoDiscardable, mutedInfo, title, favIconUrl, status, incognito, width, height, sessionId) {
    return new TabSample(id === void 0 ? this.id : id, index === void 0 ? this.index : index, windowId === void 0 ? this.windowId : windowId, openerTabId === void 0 ? this.openerTabId : openerTabId, url === void 0 ? this.url : url, active === void 0 ? this.active : active, currentWindow === void 0 ? this.currentWindow : currentWindow, highlighted === void 0 ? this.highlighted : highlighted, pinned === void 0 ? this.pinned : pinned, audible === void 0 ? this.audible : audible, discarded === void 0 ? this.discarded : discarded, autoDiscardable === void 0 ? this.autoDiscardable : autoDiscardable, mutedInfo === void 0 ? this.mutedInfo : mutedInfo, title === void 0 ? this.title : title, favIconUrl === void 0 ? this.favIconUrl : favIconUrl, status === void 0 ? this.status : status, incognito === void 0 ? this.incognito : incognito, width === void 0 ? this.width : width, height === void 0 ? this.height : height, sessionId === void 0 ? this.sessionId : sessionId);
  };
  TabSample.prototype.toString = function () {
    return 'TabSample(id=' + Kotlin.toString(this.id) + (', index=' + Kotlin.toString(this.index)) + (', windowId=' + Kotlin.toString(this.windowId)) + (', openerTabId=' + Kotlin.toString(this.openerTabId)) + (', url=' + Kotlin.toString(this.url)) + (', active=' + Kotlin.toString(this.active)) + (', currentWindow=' + Kotlin.toString(this.currentWindow)) + (', highlighted=' + Kotlin.toString(this.highlighted)) + (', pinned=' + Kotlin.toString(this.pinned)) + (', audible=' + Kotlin.toString(this.audible)) + (', discarded=' + Kotlin.toString(this.discarded)) + (', autoDiscardable=' + Kotlin.toString(this.autoDiscardable)) + (', mutedInfo=' + Kotlin.toString(this.mutedInfo)) + (', title=' + Kotlin.toString(this.title)) + (', favIconUrl=' + Kotlin.toString(this.favIconUrl)) + (', status=' + Kotlin.toString(this.status)) + (', incognito=' + Kotlin.toString(this.incognito)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', sessionId=' + Kotlin.toString(this.sessionId)) + ')';
  };
  TabSample.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.windowId) | 0;
    result = result * 31 + Kotlin.hashCode(this.openerTabId) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentWindow) | 0;
    result = result * 31 + Kotlin.hashCode(this.highlighted) | 0;
    result = result * 31 + Kotlin.hashCode(this.pinned) | 0;
    result = result * 31 + Kotlin.hashCode(this.audible) | 0;
    result = result * 31 + Kotlin.hashCode(this.discarded) | 0;
    result = result * 31 + Kotlin.hashCode(this.autoDiscardable) | 0;
    result = result * 31 + Kotlin.hashCode(this.mutedInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.favIconUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.incognito) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.sessionId) | 0;
    return result;
  };
  TabSample.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.windowId, other.windowId) && Kotlin.equals(this.openerTabId, other.openerTabId) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.currentWindow, other.currentWindow) && Kotlin.equals(this.highlighted, other.highlighted) && Kotlin.equals(this.pinned, other.pinned) && Kotlin.equals(this.audible, other.audible) && Kotlin.equals(this.discarded, other.discarded) && Kotlin.equals(this.autoDiscardable, other.autoDiscardable) && Kotlin.equals(this.mutedInfo, other.mutedInfo) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.favIconUrl, other.favIconUrl) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.incognito, other.incognito) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.sessionId, other.sessionId)))));
  };
  function Tab(id, index, windowId, openerTabId, url, active, currentWindow, highlighted, pinned, audible, discarded, autoDiscardable, mutedInfo, title, favIconUrl, status, incognito, width, height, sessionId) {
    this.id = id;
    this.index = index;
    this.windowId = windowId;
    this.openerTabId = openerTabId;
    this.url = url;
    this.active = active;
    this.currentWindow = currentWindow;
    this.highlighted = highlighted;
    this.pinned = pinned;
    this.audible = audible;
    this.discarded = discarded;
    this.autoDiscardable = autoDiscardable;
    this.mutedInfo = mutedInfo;
    this.title = title;
    this.favIconUrl = favIconUrl;
    this.status = status;
    this.incognito = incognito;
    this.width = width;
    this.height = height;
    this.sessionId = sessionId;
  }
  Tab.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab',
    interfaces: []
  };
  Tab.prototype.component1 = function () {
    return this.id;
  };
  Tab.prototype.component2 = function () {
    return this.index;
  };
  Tab.prototype.component3 = function () {
    return this.windowId;
  };
  Tab.prototype.component4 = function () {
    return this.openerTabId;
  };
  Tab.prototype.component5 = function () {
    return this.url;
  };
  Tab.prototype.component6 = function () {
    return this.active;
  };
  Tab.prototype.component7 = function () {
    return this.currentWindow;
  };
  Tab.prototype.component8 = function () {
    return this.highlighted;
  };
  Tab.prototype.component9 = function () {
    return this.pinned;
  };
  Tab.prototype.component10 = function () {
    return this.audible;
  };
  Tab.prototype.component11 = function () {
    return this.discarded;
  };
  Tab.prototype.component12 = function () {
    return this.autoDiscardable;
  };
  Tab.prototype.component13 = function () {
    return this.mutedInfo;
  };
  Tab.prototype.component14 = function () {
    return this.title;
  };
  Tab.prototype.component15 = function () {
    return this.favIconUrl;
  };
  Tab.prototype.component16 = function () {
    return this.status;
  };
  Tab.prototype.component17 = function () {
    return this.incognito;
  };
  Tab.prototype.component18 = function () {
    return this.width;
  };
  Tab.prototype.component19 = function () {
    return this.height;
  };
  Tab.prototype.component20 = function () {
    return this.sessionId;
  };
  Tab.prototype.copy_89o2rn$ = function (id, index, windowId, openerTabId, url, active, currentWindow, highlighted, pinned, audible, discarded, autoDiscardable, mutedInfo, title, favIconUrl, status, incognito, width, height, sessionId) {
    return new Tab(id === void 0 ? this.id : id, index === void 0 ? this.index : index, windowId === void 0 ? this.windowId : windowId, openerTabId === void 0 ? this.openerTabId : openerTabId, url === void 0 ? this.url : url, active === void 0 ? this.active : active, currentWindow === void 0 ? this.currentWindow : currentWindow, highlighted === void 0 ? this.highlighted : highlighted, pinned === void 0 ? this.pinned : pinned, audible === void 0 ? this.audible : audible, discarded === void 0 ? this.discarded : discarded, autoDiscardable === void 0 ? this.autoDiscardable : autoDiscardable, mutedInfo === void 0 ? this.mutedInfo : mutedInfo, title === void 0 ? this.title : title, favIconUrl === void 0 ? this.favIconUrl : favIconUrl, status === void 0 ? this.status : status, incognito === void 0 ? this.incognito : incognito, width === void 0 ? this.width : width, height === void 0 ? this.height : height, sessionId === void 0 ? this.sessionId : sessionId);
  };
  Tab.prototype.toString = function () {
    return 'Tab(id=' + Kotlin.toString(this.id) + (', index=' + Kotlin.toString(this.index)) + (', windowId=' + Kotlin.toString(this.windowId)) + (', openerTabId=' + Kotlin.toString(this.openerTabId)) + (', url=' + Kotlin.toString(this.url)) + (', active=' + Kotlin.toString(this.active)) + (', currentWindow=' + Kotlin.toString(this.currentWindow)) + (', highlighted=' + Kotlin.toString(this.highlighted)) + (', pinned=' + Kotlin.toString(this.pinned)) + (', audible=' + Kotlin.toString(this.audible)) + (', discarded=' + Kotlin.toString(this.discarded)) + (', autoDiscardable=' + Kotlin.toString(this.autoDiscardable)) + (', mutedInfo=' + Kotlin.toString(this.mutedInfo)) + (', title=' + Kotlin.toString(this.title)) + (', favIconUrl=' + Kotlin.toString(this.favIconUrl)) + (', status=' + Kotlin.toString(this.status)) + (', incognito=' + Kotlin.toString(this.incognito)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', sessionId=' + Kotlin.toString(this.sessionId)) + ')';
  };
  Tab.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.windowId) | 0;
    result = result * 31 + Kotlin.hashCode(this.openerTabId) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentWindow) | 0;
    result = result * 31 + Kotlin.hashCode(this.highlighted) | 0;
    result = result * 31 + Kotlin.hashCode(this.pinned) | 0;
    result = result * 31 + Kotlin.hashCode(this.audible) | 0;
    result = result * 31 + Kotlin.hashCode(this.discarded) | 0;
    result = result * 31 + Kotlin.hashCode(this.autoDiscardable) | 0;
    result = result * 31 + Kotlin.hashCode(this.mutedInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.favIconUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.incognito) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.sessionId) | 0;
    return result;
  };
  Tab.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.index, other.index) && Kotlin.equals(this.windowId, other.windowId) && Kotlin.equals(this.openerTabId, other.openerTabId) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.currentWindow, other.currentWindow) && Kotlin.equals(this.highlighted, other.highlighted) && Kotlin.equals(this.pinned, other.pinned) && Kotlin.equals(this.audible, other.audible) && Kotlin.equals(this.discarded, other.discarded) && Kotlin.equals(this.autoDiscardable, other.autoDiscardable) && Kotlin.equals(this.mutedInfo, other.mutedInfo) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.favIconUrl, other.favIconUrl) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.incognito, other.incognito) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.sessionId, other.sessionId)))));
  };
  function MutedInfo() {
  }
  MutedInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutedInfo',
    interfaces: []
  };
  var package$k_chrome_api = _.k_chrome_api || (_.k_chrome_api = {});
  package$k_chrome_api.RuntimeError = RuntimeError;
  package$k_chrome_api.RuntimeMessage = RuntimeMessage;
  ScriptDetails.Code = ScriptDetails$Code;
  ScriptDetails.File = ScriptDetails$File;
  package$k_chrome_api.ScriptDetails = ScriptDetails;
  package$k_chrome_api.ZoomSettings = ZoomSettings;
  package$k_chrome_api.TabSample = TabSample;
  package$k_chrome_api.Tab = Tab;
  package$k_chrome_api.MutedInfo = MutedInfo;
  Kotlin.defineModule('k-chrome-api', _);
  return _;
}(typeof this['k-chrome-api'] === 'undefined' ? {} : this['k-chrome-api'], kotlin);
