Object.defineProperty(exports,"__esModule",{value:true});exports.default=App;var React=_interopRequireWildcard(require("react"));var _native=require("@react-navigation/native");var _bottomTabs=require("@react-navigation/bottom-tabs");var _HomeScreen=require("./screens/HomeScreen");var _reactNative=require("react-native");var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="C:\\Users\\aimee\\OneDrive\\Desktop\\Projects2024\\COS590-0-aimeelramirez\\client\\src\\App.jsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}var Tab=(0,_bottomTabs.createBottomTabNavigator)();var AppNavigator=function AppNavigator(){return(0,_jsxRuntime.jsx)(_reactNative.View,{style:{backgroundColor:'pink',flex:1},children:(0,_jsxRuntime.jsx)(_native.NavigationContainer,{children:(0,_jsxRuntime.jsx)(Tab.Navigator,{children:(0,_jsxRuntime.jsx)(Tab.Screen,{name:"Home",component:_HomeScreen.HomeScreen})})})});};function App(){return(0,_jsxRuntime.jsx)(AppNavigator,{});}