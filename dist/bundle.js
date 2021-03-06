(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lbry-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["lbry-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lbry-redux")) : factory(root["lbry-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LBRYINC_ACTIONS", function() { return constants_action_types__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lbryio", function() { return lbryio__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewards", function() { return rewards__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var redux_reducers_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriptionsReducer", function() { return redux_reducers_subscriptions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return redux_actions_auth__WEBPACK_IMPORTED_MODULE_4__["doGenerateAuthToken"]; });

/* harmony import */ var redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRewardList", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__["doRewardList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardType", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__["doClaimRewardType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimEligiblePurchaseRewards", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__["doClaimEligiblePurchaseRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardClearError", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__["doClaimRewardClearError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchRewardedContent", function() { return redux_actions_rewards__WEBPACK_IMPORTED_MODULE_5__["doFetchRewardedContent"]; });

/* harmony import */ var redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscribe", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doChannelSubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelUnsubscribe", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doChannelUnsubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionEnableNotifications", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doChannelSubscriptionEnableNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionDisableNotifications", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doChannelSubscriptionDisableNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscription", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doCheckSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doCheckSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptionsInit", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doCheckSubscriptionsInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCompleteFirstRun", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doCompleteFirstRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchMySubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doFetchMySubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchRecommendedSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doFetchRecommendedSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscription", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doRemoveUnreadSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doRemoveUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetViewMode", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doSetViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doShowSuggestedSubs", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doShowSuggestedSubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUpdateUnreadSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doUpdateUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSubscriptionLatest", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["setSubscriptionLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doCountSubscriptions", function() { return redux_actions_subscriptions__WEBPACK_IMPORTED_MODULE_6__["doCountSubscriptions"]; });

/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchInviteStatus", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doFetchInviteStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doInstallNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doInstallNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doAuthenticate", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doAuthenticate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserFetch", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserEmailNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailLogin", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserEmailLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserCheckId", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserCheckId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserCheckEmailVerified", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserCheckEmailVerified"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailToVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserEmailToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerifyFailure", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserEmailVerifyFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserEmailVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserPhoneNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserLogout", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneReset", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserPhoneReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerifyFailure", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserPhoneVerifyFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserPhoneVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserMobileVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserMobileVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchAccessToken", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doFetchAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserResendVerificationEmail", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserResendVerificationEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserIdentityVerify", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserIdentityVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserInviteNew", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserInviteNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserReport", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserReport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserProfileSave", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserProfileSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserProfileUpdate", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserProfileUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserProfileFetch", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserProfileFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSaveUserHelp", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doSaveUserHelp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSaveUserFeedback", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doSaveUserFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserNotificationRegister", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserNotificationRegister"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doUserNotificationCallback", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doUserNotificationCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSearchWithFilters", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doSearchWithFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFilterResultsVisible", function() { return redux_actions_user__WEBPACK_IMPORTED_MODULE_7__["doFilterResultsVisible"]; });

/* harmony import */ var redux_actions_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doReportType", function() { return redux_actions_report__WEBPACK_IMPORTED_MODULE_8__["doReportType"]; });

/* harmony import */ var redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return redux_actions_cost_info__WEBPACK_IMPORTED_MODULE_9__["doFetchCostInfoForUri"]; });

/* harmony import */ var redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return redux_actions_blacklist__WEBPACK_IMPORTED_MODULE_10__["doBlackListedOutpointsSubscribe"]; });

/* harmony import */ var redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doFetchFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doFetchTrendingUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchContentCategory", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doFetchContentCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchRecentList", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doFetchRecentList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchNotInterestedList", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doFetchNotInterestedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doNotInterested", function() { return redux_actions_homepage__WEBPACK_IMPORTED_MODULE_11__["doNotInterested"]; });

/* harmony import */ var redux_actions_stats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_12__["doFetchViewCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRegView", function() { return redux_actions_stats__WEBPACK_IMPORTED_MODULE_12__["doRegView"]; });

/* harmony import */ var redux_actions_sync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_13__["doGetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_13__["doSetSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return redux_actions_sync__WEBPACK_IMPORTED_MODULE_13__["doSetDefaultAccount"]; });

/* harmony import */ var redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doLikeOnClick", function() { return redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__["doLikeOnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doDislikeOnClick", function() { return redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__["doDislikeOnClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doLikeCount", function() { return redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__["doLikeCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doLikeCheck", function() { return redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__["doLikeCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchLikedList", function() { return redux_actions_likes__WEBPACK_IMPORTED_MODULE_14__["doFetchLikedList"]; });

/* harmony import */ var redux_actions_playlist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchPlaylist", function() { return redux_actions_playlist__WEBPACK_IMPORTED_MODULE_15__["doFetchPlaylist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doAddToPlaylist", function() { return redux_actions_playlist__WEBPACK_IMPORTED_MODULE_15__["doAddToPlaylist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveFromPlaylist", function() { return redux_actions_playlist__WEBPACK_IMPORTED_MODULE_15__["doRemoveFromPlaylist"]; });

/* harmony import */ var redux_actions_category__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchCategoryList", function() { return redux_actions_category__WEBPACK_IMPORTED_MODULE_16__["doFetchCategoryList"]; });

/* harmony import */ var redux_actions_history__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doAddToHistory", function() { return redux_actions_history__WEBPACK_IMPORTED_MODULE_17__["doAddToHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doFetchHistoryList", function() { return redux_actions_history__WEBPACK_IMPORTED_MODULE_17__["doFetchHistoryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveFromHistory", function() { return redux_actions_history__WEBPACK_IMPORTED_MODULE_17__["doRemoveFromHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doRemoveAllFromHistory", function() { return redux_actions_history__WEBPACK_IMPORTED_MODULE_17__["doRemoveAllFromHistory"]; });

/* harmony import */ var redux_actions_search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doAutocompleteSearchQuery", function() { return redux_actions_search__WEBPACK_IMPORTED_MODULE_18__["doAutocompleteSearchQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doSearchQuery", function() { return redux_actions_search__WEBPACK_IMPORTED_MODULE_18__["doSearchQuery"]; });

/* harmony import */ var redux_reducers_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return redux_reducers_auth__WEBPACK_IMPORTED_MODULE_19__["authReducer"]; });

/* harmony import */ var redux_reducers_rewards__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewardsReducer", function() { return redux_reducers_rewards__WEBPACK_IMPORTED_MODULE_20__["rewardsReducer"]; });

/* harmony import */ var redux_reducers_user__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return redux_reducers_user__WEBPACK_IMPORTED_MODULE_21__["userReducer"]; });

/* harmony import */ var redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return redux_reducers_cost_info__WEBPACK_IMPORTED_MODULE_22__["costInfoReducer"]; });

/* harmony import */ var redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return redux_reducers_blacklist__WEBPACK_IMPORTED_MODULE_23__["blacklistReducer"]; });

/* harmony import */ var redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return redux_reducers_homepage__WEBPACK_IMPORTED_MODULE_24__["homepageReducer"]; });

/* harmony import */ var redux_reducers_stats__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return redux_reducers_stats__WEBPACK_IMPORTED_MODULE_25__["statsReducer"]; });

/* harmony import */ var redux_reducers_sync__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syncReducer", function() { return redux_reducers_sync__WEBPACK_IMPORTED_MODULE_26__["syncReducer"]; });

/* harmony import */ var redux_reducers_likes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likesReducer", function() { return redux_reducers_likes__WEBPACK_IMPORTED_MODULE_27__["likesReducer"]; });

/* harmony import */ var redux_reducers_playlist__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playlistReducer", function() { return redux_reducers_playlist__WEBPACK_IMPORTED_MODULE_28__["playlistReducer"]; });

/* harmony import */ var redux_reducers_report__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportReducer", function() { return redux_reducers_report__WEBPACK_IMPORTED_MODULE_29__["reportReducer"]; });

/* harmony import */ var redux_reducers_category__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "categoryReducer", function() { return redux_reducers_category__WEBPACK_IMPORTED_MODULE_30__["categoryReducer"]; });

/* harmony import */ var redux_reducers_history__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "historyReducer", function() { return redux_reducers_history__WEBPACK_IMPORTED_MODULE_31__["historyReducer"]; });

/* harmony import */ var redux_reducers_search__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return redux_reducers_search__WEBPACK_IMPORTED_MODULE_32__["searchReducer"]; });

/* harmony import */ var redux_selectors_auth__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_33__["selectAuthToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return redux_selectors_auth__WEBPACK_IMPORTED_MODULE_33__["selectIsAuthenticating"]; });

/* harmony import */ var redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectClaimRewardError", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["makeSelectClaimRewardError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsRewardClaimPending", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["makeSelectIsRewardClaimPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardAmountByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["makeSelectRewardAmountByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["makeSelectRewardByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardsByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectUnclaimedRewardsByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsById", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectClaimedRewardsById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectClaimedRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsByTransactionId", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectClaimedRewardsByTransactionId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectUnclaimedRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingRewards", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectFetchingRewards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardValue", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectUnclaimedRewardValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimsPendingByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectClaimsPendingByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectClaimErrorsByType", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectClaimErrorsByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRewardContentClaimIds", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectRewardContentClaimIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectReferralReward", function() { return redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_34__["selectReferralReward"]; });

/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsNew", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["makeSelectIsNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsSubscribed", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["makeSelectIsSubscribed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectUnreadByChannel", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["makeSelectUnreadByChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEnabledChannelNotifications", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectEnabledChannelNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectIsFetchingSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectViewMode", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSuggested", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSuggested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSuggested", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectIsFetchingSuggested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSuggestedChannels", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSuggestedChannels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFirstRunCompleted", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectFirstRunCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectShowSuggestedSubs", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectShowSuggestedSubs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionsBeingFetched", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSubscriptionsBeingFetched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadByChannel", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectUnreadByChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadAmount", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectUnreadAmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnreadSubscriptions", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectUnreadSubscriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionClaims", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSubscriptionClaims"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionCount", function() { return redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_35__["selectSubscriptionCount"]; });

/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectAuthenticationIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckId", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserCheckId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserEmailLogin", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserEmailLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckType", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserCheckType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckValue", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserCheckValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserEmail", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserLoggedOut", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserLoggedOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserPhone", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserPhone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailToVerify", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectEmailToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneToVerify", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectPhoneToVerify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsRewardApproved", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserIsRewardApproved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectEmailNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectEmailNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectPhoneNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectPhoneNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectEmailVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectEmailVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectPhoneVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectPhoneVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectIdentityVerifyIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectIdentityVerifyErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserIsVerificationCandidate", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserIsVerificationCandidate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAccessToken", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInviteStatusIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitesRemaining", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInvitesRemaining"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitees", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInvitees"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusFailed", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInviteStatusFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewIsPending", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInviteNewIsPending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewErrorMessage", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInviteNewErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteReferralLink", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserInviteReferralLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserReport", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserReport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSavedUserData", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectSavedUserData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUpdatedUserData", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUpdatedUserData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHelpResponse", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectHelpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFeedbackResponse", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectFeedbackResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserNotificationCallbackData", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserNotificationCallbackData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUserNotificationData", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectUserNotificationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilteredSearchList", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectFilteredSearchList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilterResultsVisible", function() { return redux_selectors_user__WEBPACK_IMPORTED_MODULE_36__["selectFilterResultsVisible"]; });

/* harmony import */ var redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likeSelector", function() { return redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__["likeSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikeSelector", function() { return redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__["dislikeSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "likeCountSelector", function() { return redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__["likeCountSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dislikeCountSelector", function() { return redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__["dislikeCountSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectLikedList", function() { return redux_selectors_likes__WEBPACK_IMPORTED_MODULE_37__["selectLikedList"]; });

/* harmony import */ var redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_38__["makeSelectFetchingCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_38__["makeSelectCostInfoForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_38__["selectAllCostInfoByUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return redux_selectors_cost_info__WEBPACK_IMPORTED_MODULE_38__["selectFetchingCostInfo"]; });

/* harmony import */ var redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return redux_selectors_blacklist__WEBPACK_IMPORTED_MODULE_39__["selectBlackListedOutpoints"]; });

/* harmony import */ var redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectFetchingFeaturedUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectTrendingUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectFetchingTrendingUris"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectContentCategory", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectContentCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRecentList", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectRecentList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNotInterestedList", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectNotInterestedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectNotInterested", function() { return redux_selectors_homepage__WEBPACK_IMPORTED_MODULE_40__["selectNotInterested"]; });

/* harmony import */ var redux_selectors_stats__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_41__["makeSelectViewCountForUri"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectViewCount", function() { return redux_selectors_stats__WEBPACK_IMPORTED_MODULE_41__["selectViewCount"]; });

/* harmony import */ var redux_selectors_playlist__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPlaylistName", function() { return redux_selectors_playlist__WEBPACK_IMPORTED_MODULE_42__["selectPlaylistName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPlaylistUris", function() { return redux_selectors_playlist__WEBPACK_IMPORTED_MODULE_42__["selectPlaylistUris"]; });

/* harmony import */ var redux_selectors_category__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCategoryListing", function() { return redux_selectors_category__WEBPACK_IMPORTED_MODULE_43__["selectCategoryListing"]; });

/* harmony import */ var redux_selectors_history__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHistoryList", function() { return redux_selectors_history__WEBPACK_IMPORTED_MODULE_44__["selectHistoryList"]; });

/* harmony import */ var redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHasSyncedWallet", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__["selectHasSyncedWallet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSyncHash", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__["selectSyncHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncErrorMessage", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__["selectSetSyncErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsRetrievingSync", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__["selectIsRetrievingSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsSettingSync", function() { return redux_selectors_sync__WEBPACK_IMPORTED_MODULE_45__["selectIsSettingSync"]; });




 // constants

 // Lbryio and rewards

 // actions















 // reducers















 // selectors















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_FAILURE", function() { return GENERATE_AUTH_TOKEN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_STARTED", function() { return GENERATE_AUTH_TOKEN_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_AUTH_TOKEN_SUCCESS", function() { return GENERATE_AUTH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FEATURED_CONTENT_STARTED", function() { return FETCH_FEATURED_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FEATURED_CONTENT_COMPLETED", function() { return FETCH_FEATURED_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_CONTENT_STARTED", function() { return FETCH_TRENDING_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRENDING_CONTENT_COMPLETED", function() { return FETCH_TRENDING_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_URIS_STARTED", function() { return RESOLVE_URIS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_URIS_COMPLETED", function() { return RESOLVE_URIS_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIMS_STARTED", function() { return FETCH_CHANNEL_CLAIMS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIMS_COMPLETED", function() { return FETCH_CHANNEL_CLAIMS_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIM_COUNT_STARTED", function() { return FETCH_CHANNEL_CLAIM_COUNT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_CLAIM_COUNT_COMPLETED", function() { return FETCH_CHANNEL_CLAIM_COUNT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLAIM_LIST_MINE_STARTED", function() { return FETCH_CLAIM_LIST_MINE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLAIM_LIST_MINE_COMPLETED", function() { return FETCH_CLAIM_LIST_MINE_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABANDON_CLAIM_STARTED", function() { return ABANDON_CLAIM_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABANDON_CLAIM_SUCCEEDED", function() { return ABANDON_CLAIM_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_LIST_STARTED", function() { return FETCH_CHANNEL_LIST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHANNEL_LIST_COMPLETED", function() { return FETCH_CHANNEL_LIST_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHANNEL_STARTED", function() { return CREATE_CHANNEL_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CHANNEL_COMPLETED", function() { return CREATE_CHANNEL_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_STARTED", function() { return PUBLISH_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_COMPLETED", function() { return PUBLISH_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_FAILED", function() { return PUBLISH_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLAYING_URI", function() { return SET_PLAYING_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTENT_POSITION", function() { return SET_CONTENT_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTENT_LAST_VIEWED", function() { return SET_CONTENT_LAST_VIEWED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CONTENT_HISTORY_URI", function() { return CLEAR_CONTENT_HISTORY_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CONTENT_HISTORY_ALL", function() { return CLEAR_CONTENT_HISTORY_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIBE", function() { return CHANNEL_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_UNSUBSCRIBE", function() { return CHANNEL_UNSUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS", function() { return CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS", function() { return CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_FETCHED_SUBSCRIPTIONS", function() { return HAS_FETCHED_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUBSCRIPTION_LATEST", function() { return SET_SUBSCRIPTION_LATEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUBSCRIPTION_UNREADS", function() { return UPDATE_SUBSCRIPTION_UNREADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUBSCRIPTION_UNREADS", function() { return REMOVE_SUBSCRIPTION_UNREADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTION_STARTED", function() { return CHECK_SUBSCRIPTION_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTION_COMPLETED", function() { return CHECK_SUBSCRIPTION_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_SUBSCRIPTIONS_SUBSCRIBE", function() { return CHECK_SUBSCRIPTIONS_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_START", function() { return FETCH_SUBSCRIPTIONS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_FAIL", function() { return FETCH_SUBSCRIPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTIONS_SUCCESS", function() { return FETCH_SUBSCRIPTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEW_MODE", function() { return SET_VIEW_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_START", function() { return GET_SUGGESTED_SUBSCRIPTIONS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS", function() { return GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGESTED_SUBSCRIPTIONS_FAIL", function() { return GET_SUGGESTED_SUBSCRIPTIONS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIPTION_FIRST_RUN_COMPLETED", function() { return SUBSCRIPTION_FIRST_RUN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_SUGGESTED_SUBSCRIPTIONS", function() { return VIEW_SUGGESTED_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUBSCRIPTION_COUNT", function() { return FETCH_SUBSCRIPTION_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_STARTED", function() { return FETCH_BLACK_LISTED_CONTENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_COMPLETED", function() { return FETCH_BLACK_LISTED_CONTENT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BLACK_LISTED_CONTENT_FAILED", function() { return FETCH_BLACK_LISTED_CONTENT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACK_LISTED_CONTENT_SUBSCRIBE", function() { return BLACK_LISTED_CONTENT_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COST_INFO_STARTED", function() { return FETCH_COST_INFO_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COST_INFO_COMPLETED", function() { return FETCH_COST_INFO_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_STARTED", function() { return FETCH_VIEW_COUNT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_FAILED", function() { return FETCH_VIEW_COUNT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VIEW_COUNT_COMPLETED", function() { return FETCH_VIEW_COUNT_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_STARTED", function() { return GET_SYNC_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SYNC_COMPLETED", function() { return GET_SYNC_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_STARTED", function() { return SET_SYNC_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_FAILED", function() { return SET_SYNC_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SYNC_COMPLETED", function() { return SET_SYNC_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEFAULT_ACCOUNT", function() { return SET_DEFAULT_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_ON_CLICK", function() { return LIKE_ON_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_COUNT", function() { return LIKE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_CHECK", function() { return LIKE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISLIKE_ON_CLICK", function() { return DISLIKE_ON_CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_LIKED_LIST", function() { return FETCH_LIKED_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REG_VIEW", function() { return REG_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_COUNTER", function() { return VIEW_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLAYLIST", function() { return FETCH_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_PLAYLIST", function() { return ADD_TO_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_PLAYLIST", function() { return REMOVE_FROM_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORY_LIST", function() { return FETCH_CATEGORY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_HISTORY", function() { return ADD_TO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_HISTORY", function() { return FETCH_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_HISTORY", function() { return DELETE_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_HISTORY", function() { return DELETE_ALL_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_SEARCH_QUERY", function() { return AUTOCOMPLETE_SEARCH_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_QUERY_RESULT", function() { return SEARCH_QUERY_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_QUERY_FILTERS", function() { return SEARCH_QUERY_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FILTER_VISIBLE", function() { return SEARCH_FILTER_VISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REPORT_SUCCESS", function() { return USER_REPORT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CONTENT_CATEGORY", function() { return FETCH_CONTENT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECENT_LIST", function() { return FETCH_RECENT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_SAVE", function() { return USER_PROFILE_SAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_UPDATE", function() { return USER_PROFILE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_FETCH", function() { return USER_PROFILE_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_HELP", function() { return SAVE_USER_HELP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_FEEDBACK", function() { return SAVE_USER_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NOT_INTERESTED_LIST", function() { return FETCH_NOT_INTERESTED_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_INTERESTED_CONTENT", function() { return NOT_INTERESTED_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_REGISTER", function() { return NOTIFICATION_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_CALLBACK", function() { return NOTIFICATION_CALLBACK; });
// Auth Token
var GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
var GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
var GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS'; // Claims

var FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
var FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
var FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
var FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
var RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
var RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
var FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
var FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
var FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
var FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
var FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
var FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
var ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
var ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
var FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
var FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
var CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
var CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
var PUBLISH_STARTED = 'PUBLISH_STARTED';
var PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
var PUBLISH_FAILED = 'PUBLISH_FAILED';
var SET_PLAYING_URI = 'SET_PLAYING_URI';
var SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
var SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
var CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
var CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL'; // Subscriptions

var CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
var CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
var CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
var CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
var HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
var SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
var UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
var REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
var CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
var CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
var CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
var FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
var FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
var FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
var SET_VIEW_MODE = 'SET_VIEW_MODE';
var GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
var GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
var GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
var SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
var VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS';
var FETCH_SUBSCRIPTION_COUNT = 'FETCH_SUBSCRIPTION_COUNT'; // Blacklist

var FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
var FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
var FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
var BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE'; // Cost Info

var FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
var FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED'; // File Stats

var FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
var FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
var FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED'; // Cross-device Sync

var GET_SYNC_STARTED = 'GET_SYNC_STARTED';
var GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
var SET_SYNC_STARTED = 'SET_SYNC_STARTED';
var SET_SYNC_FAILED = 'SET_SYNC_FAILED';
var SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
var SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT'; // Likes

var LIKE_ON_CLICK = 'LIKE_ON_CLICK';
var LIKE_COUNT = 'LIKE_COUNT';
var LIKE_CHECK = 'LIKE_CHECK';
var DISLIKE_ON_CLICK = 'DISLIKE_ON_CLICK';
var FETCH_LIKED_LIST = 'FETCH_LIKED_LIST'; // Views

var REG_VIEW = 'REG_VIEW';
var VIEW_COUNTER = 'REG_COUNTER'; // Playlist - Default Watch Later

var FETCH_PLAYLIST = 'FETCH_PLAYLIST';
var ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
var REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST'; // Category List

var FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST'; // User History

var ADD_TO_HISTORY = 'ADD_TO_HISTORY';
var FETCH_HISTORY = 'FETCH_HISTORY';
var DELETE_HISTORY = 'DELETE_HISTORY';
var DELETE_ALL_HISTORY = 'DELETE_ALL_HISTORY'; // Search Queries

var AUTOCOMPLETE_SEARCH_QUERY = 'AUTOCOMPLETE_SEARCH_QUERY';
var SEARCH_QUERY_RESULT = 'SEARCH_QUERY_RESULT';
var SEARCH_QUERY_FILTERS = 'SEARCH_QUERY_FILTERS';
var SEARCH_FILTER_VISIBLE = 'SEARCH_FILTER_VISIBLE'; // Report

var USER_REPORT_SUCCESS = 'USER_REPORT_SUCCESS'; // Category

var FETCH_CONTENT_CATEGORY = 'FETCH_CONTENT_CATEGORY';
var FETCH_RECENT_LIST = 'FETCH_RECENT_LIST'; // User Profile

var USER_PROFILE_SAVE = 'USER_PROFILE_SAVE';
var USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE';
var USER_PROFILE_FETCH = 'USER_PROFILE_FETCH'; // User Help &  Feedback

var SAVE_USER_HELP = 'SAVE_USER_HELP';
var SAVE_USER_FEEDBACK = 'SAVE_USER_FEEDBACK'; // Not Interested

var FETCH_NOT_INTERESTED_LIST = 'FETCH_NOT_INTERESTED_LIST';
var NOT_INTERESTED_CONTENT = 'NOT_INTERESTED_CONTENT'; // Notifications

var NOTIFICATION_REGISTER = 'NOTIFICATION_REGISTER';
var NOTIFICATION_CALLBACK = 'NOTIFICATION_CALLBACK';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'http://13.232.221.124:3000/'
};
var EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000; // We can't use env's because they aren't passed into node_modules

Lbryio.setLocalApi = function (endpoint) {
  Lbryio.CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

Lbryio.call = function (resource, action) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'get';

  if (!Lbryio.enabled) {
    return Promise.reject(new Error(__('LBRY internal API is disabled')));
  }

  if (!(method === 'get' || method === 'post')) {
    return Promise.reject(new Error(__('Invalid method')));
  }

  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    return response.json().then(function (json) {
      var error;

      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Unknown API error signature');
      }

      error.response = response; // This is primarily a hack used in actions/user.js

      return Promise.reject(error);
    });
  }

  function makeRequest(url, options) {
    return fetch(url, options).then(checkAndParse);
  }

  return Lbryio.getAuthToken().then(function (token) {
    var fullParams = _objectSpread({
      auth_token: token
    }, params);

    var qs = querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(fullParams);
    var url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action, "?").concat(qs);
    var options = {
      method: 'GET'
    };

    if (method === 'post') {
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs
      };
      url = "".concat(Lbryio.CONNECTION_STRING).concat(resource, "/").concat(action);
    }

    return makeRequest(url, options).then(function (response) {
      return response.data;
    });
  });
};

Lbryio.authToken = null;

Lbryio.getAuthToken = function () {
  return new Promise(function (resolve) {
    if (Lbryio.authToken) {
      resolve(Lbryio.authToken);
    } else if (Lbryio.overrides.getAuthToken) {
      Lbryio.overrides.getAuthToken().then(function (token) {
        resolve(token);
      });
    } else {
      var _window = window,
          store = _window.store;

      if (store) {
        var state = store.getState();
        var token = state.auth ? state.auth.authToken : null;
        Lbryio.authToken = token;
        resolve(token);
      }

      resolve(null);
    }
  });
};

Lbryio.getCurrentUser = function () {
  return Lbryio.call('user', 'me').then(function (user) {
    if (user) return Promise.resolve(user);
    return Promise.resolve({
      id: null,
      language: 'en',
      primary_email: null,
      has_verified_email: false,
      is_identity_verified: false,
      is_reward_approved: false
    });
  });
};

Lbryio.authenticate = function () {
  if (!Lbryio.enabled) {
    return new Promise(function (resolve) {
      resolve({
        id: 1,
        language: 'en',
        primary_email: 'disabled@lbry.io',
        has_verified_email: true,
        is_identity_verified: true,
        is_reward_approved: false
      });
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise(function (resolve, reject) {
      Lbryio.getAuthToken().then(function (token) {
        if (!token || token.length > 60) {
          return false;
        } // check that token works


        return Lbryio.getCurrentUser().then(function (user) {
          return user;
        })["catch"](function () {
          return false;
        });
      }).then(function (user) {
        if (user) {
          return user;
        }

        return lbry_redux__WEBPACK_IMPORTED_MODULE_1__["Lbry"].status().then(function (status) {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          } // simply call the logic to create a new user, and obtain the auth token


          return new Promise(function (res, rej) {
            Lbryio.call('user', 'new', {
              auth_token: '',
              language: 'en',
              app_id: status.installation_id
            }, 'post').then(function (response) {
              if (!response.auth_token) {
                throw new Error('auth_token was not set in the response');
              }

              var _window2 = window,
                  store = _window2.store;

              if (store) {
                store.dispatch({
                  type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"],
                  data: {
                    authToken: response.auth_token
                  }
                });
              }

              Lbryio.authToken = response.auth_token;
              res(response);
            })["catch"](function (error) {
              return rej(error);
            });
          });
        });
      }).then(function (user) {
        if (!user) {
          return Lbryio.getCurrentUser();
        }

        return user;
      }).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = function () {
  return Lbryio.CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';
};

Lbryio.getExchangeRates = function () {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise(function (resolve, reject) {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(function (_ref) {
        var LBC_USD = _ref.lbc_usd,
            LBC_BTC = _ref.lbc_btc,
            BTC_USD = _ref.btc_usd;
        var rates = {
          LBC_USD: LBC_USD,
          LBC_BTC: LBC_BTC,
          BTC_USD: BTC_USD
        };
        resolve(rates);
      })["catch"](reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }

  return Lbryio.exchangePromise;
}; // Allow overriding lbryio methods
// The desktop app will need to use it for getAuthToken because we use electron's ipcRenderer


Lbryio.overrides = {};

Lbryio.setOverride = function (methodName, newMethod) {
  Lbryio.overrides[methodName] = newMethod;
};

/* harmony default export */ __webpack_exports__["default"] = (Lbryio);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(5);
exports.encode = exports.stringify = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rewards = {};
rewards.TYPE_NEW_DEVELOPER = 'new_developer';
rewards.TYPE_NEW_USER = 'new_user';
rewards.TYPE_CONFIRM_EMAIL = 'verified_email';
rewards.TYPE_FIRST_CHANNEL = 'new_channel';
rewards.TYPE_FIRST_STREAM = 'first_stream';
rewards.TYPE_MANY_DOWNLOADS = 'many_downloads';
rewards.TYPE_FIRST_PUBLISH = 'first_publish';
rewards.TYPE_FEATURED_DOWNLOAD = 'featured_download';
rewards.TYPE_REFERRAL = 'referral';
rewards.TYPE_REWARD_CODE = 'reward_code';
rewards.TYPE_SUBSCRIPTION = 'subscription';
rewards.YOUTUBE_CREATOR = 'youtube_creator';

rewards.claimReward = function (type, rewardParams) {
  function requestReward(resolve, reject, params) {
    if (!lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].enabled) {
      reject(new Error(__('Rewards are not enabled.')));
      return;
    }

    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('reward', 'new', params, 'post').then(function (reward) {
      var message = reward.reward_notification || "You have claimed a ".concat(reward.reward_amount, " LBC reward."); // Display global notice

      var action = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["doToast"])({
        message: message,
        linkText: __('Show All'),
        linkTarget: '/rewards'
      });
      window.store.dispatch(action);

      if (rewards.callbacks.claimRewardSuccess) {
        rewards.callbacks.claimRewardSuccess();
      }

      resolve(reward);
    }, reject);
  }

  return new Promise(function (resolve, reject) {
    lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].address_unused().then(function (address) {
      var params = _objectSpread({
        reward_type: type,
        wallet_address: address
      }, rewardParams);

      switch (type) {
        case rewards.TYPE_FIRST_CHANNEL:
          lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].claim_list().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] === '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(new Error(__('Please create a channel identity first.')));
            }
          })["catch"](reject);
          break;

        case rewards.TYPE_FIRST_PUBLISH:
          lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].claim_list().then(function (claims) {
            var claim = claims.find(function (foundClaim) {
              return foundClaim.name.length && foundClaim.name[0] !== '@' && foundClaim.txid.length && foundClaim.type === 'claim';
            });

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(claims.length ? new Error(__('Please publish something and wait for confirmation by the network to claim this reward.')) : new Error(__('Please publish something to claim this reward.')));
            }
          })["catch"](reject);
          break;

        case rewards.TYPE_FIRST_STREAM:
        case rewards.TYPE_NEW_USER:
        default:
          requestReward(resolve, reject, params);
      }
    });
  });
};

rewards.callbacks = {
  // Set any callbacks that require code not found in this project
  claimRewardSuccess: null,
  claimFirstRewardSuccess: null,
  rewardApprovalRequired: null
};

rewards.setCallback = function (name, method) {
  rewards.callbacks[name] = method;
};

/* harmony default export */ __webpack_exports__["default"] = (rewards);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaultState = {
  enabledChannelNotifications: [],
  subscriptions: [],
  unread: {},
  suggested: {},
  loading: false,
  viewMode: constants_subscriptions__WEBPACK_IMPORTED_MODULE_1__["VIEW_ALL"],
  loadingSuggested: false,
  firstRunCompleted: false,
  showSuggestedSubs: false,
  subscriptionCount: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_2__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIBE"], function (state, action) {
  var newSubscription = action.data;
  var newSubscriptions = state.subscriptions.slice();
  newSubscriptions.unshift(newSubscription);
  return _objectSpread({}, state, {
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_UNSUBSCRIBE"], function (state, action) {
  var subscriptionToRemove = action.data;
  var newSubscriptions = state.subscriptions.slice().filter(function (subscription) {
    return subscription.channelName !== subscriptionToRemove.channelName;
  }); // Check if we need to remove it from the 'unread' state

  var unread = state.unread;

  if (unread[subscriptionToRemove.uri]) {
    delete unread[subscriptionToRemove.uri];
  }

  return _objectSpread({}, state, {
    unread: _objectSpread({}, unread),
    subscriptions: newSubscriptions
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SUBSCRIPTION_LATEST"], function (state, action) {
  return _objectSpread({}, state, {
    subscriptions: state.subscriptions.map(function (subscription) {
      return subscription.channelName === action.data.subscription.channelName ? _objectSpread({}, subscription, {
        latest: action.data.uri
      }) : subscription;
    })
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SUBSCRIPTION_UNREADS"], function (state, action) {
  var _action$data = action.data,
      channel = _action$data.channel,
      uris = _action$data.uris,
      type = _action$data.type;
  return _objectSpread({}, state, {
    unread: _objectSpread({}, state.unread, _defineProperty({}, channel, {
      uris: uris,
      type: type
    }))
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_SUBSCRIPTION_UNREADS"], function (state, action) {
  var _action$data2 = action.data,
      channel = _action$data2.channel,
      uris = _action$data2.uris; // If no channel is passed in, remove all unreads

  var newUnread;

  if (channel) {
    newUnread = _objectSpread({}, state.unread);

    if (!uris) {
      delete newUnread[channel];
    } else {
      newUnread[channel].uris = uris;
    }
  } else {
    newUnread = {};
  }

  return _objectSpread({}, state, {
    unread: _objectSpread({}, newUnread)
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS"], function (state, action) {
  var channelName = action.data;
  var newEnabledChannelNotifications = state.enabledChannelNotifications.slice();

  if (channelName && channelName.trim().length > 0 && newEnabledChannelNotifications.indexOf(channelName) === -1) {
    newEnabledChannelNotifications.push(channelName);
  }

  return _objectSpread({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS"], function (state, action) {
  var channelName = action.data;
  var newEnabledChannelNotifications = state.enabledChannelNotifications.slice();
  var index = newEnabledChannelNotifications.indexOf(channelName);

  if (index > -1) {
    newEnabledChannelNotifications.splice(index, 1);
  }

  return _objectSpread({}, state, {
    enabledChannelNotifications: newEnabledChannelNotifications
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_START"], function (state) {
  return _objectSpread({}, state, {
    loading: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_FAIL"], function (state) {
  return _objectSpread({}, state, {
    loading: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTIONS_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    loading: false,
    subscriptions: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_VIEW_MODE"], function (state, action) {
  return _objectSpread({}, state, {
    viewMode: action.data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_START"], function (state) {
  return _objectSpread({}, state, {
    loadingSuggested: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS"], function (state, action) {
  return _objectSpread({}, state, {
    suggested: action.data,
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGESTED_SUBSCRIPTIONS_FAIL"], function (state) {
  return _objectSpread({}, state, {
    loadingSuggested: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIPTION_FIRST_RUN_COMPLETED"], function (state) {
  return _objectSpread({}, state, {
    firstRunCompleted: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["VIEW_SUGGESTED_SUBSCRIPTIONS"], function (state) {
  return _objectSpread({}, state, {
    showSuggestedSubs: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUBSCRIPTION_COUNT"], function (state, action) {
  var subscriptionCount = action.data.subscriptionCount;
  return _objectSpread({}, state, {
    subscriptionCount: subscriptionCount
  });
}), _handleActions), defaultState));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_ALL", function() { return VIEW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_LATEST_FIRST", function() { return VIEW_LATEST_FIRST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADING", function() { return DOWNLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADED", function() { return DOWNLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_ONLY", function() { return NOTIFY_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_TOP_BID", function() { return SUGGESTED_TOP_BID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_TOP_SUBSCRIBED", function() { return SUGGESTED_TOP_SUBSCRIBED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTED_FEATURED", function() { return SUGGESTED_FEATURED; });
var VIEW_ALL = 'view_all';
var VIEW_LATEST_FIRST = 'view_latest_first'; // Types for unreads

var DOWNLOADING = 'DOWNLOADING';
var DOWNLOADED = 'DOWNLOADED';
var NOTIFY_ONLY = 'NOTIFY_ONLY;'; // Suggested types

var SUGGESTED_TOP_BID = 'top_bid';
var SUGGESTED_TOP_SUBSCRIBED = 'top_subscribed';
var SUGGESTED_FEATURED = 'featured';

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions
// eslint-disable-next-line import/prefer-default-export
var handleActions = function handleActions(actionMap, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var handler = actionMap[action.type];

    if (handler) {
      var newState = handler(state, action);
      return Object.assign({}, state, newState);
    } // just return the original state if no handler
    // returning a copy here breaks redux-persist


    return state;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGenerateAuthToken", function() { return doGenerateAuthToken; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function doGenerateAuthToken(installationId) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('user', 'new', {
      auth_token: '',
      language: 'en',
      app_id: installationId
    }, 'post').then(function (response) {
      if (!response.auth_token) {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]
        });
      } else {
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"],
          data: {
            authToken: response.auth_token
          }
        });
      }
    })["catch"](function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]
      });
    });
  };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRewardList", function() { return doRewardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardType", function() { return doClaimRewardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimEligiblePurchaseRewards", function() { return doClaimEligiblePurchaseRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doClaimRewardClearError", function() { return doClaimRewardClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchRewardedContent", function() { return doFetchRewardedContent; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var redux_actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);






function doRewardList() {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_STARTED
    });
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('reward', 'list', {
      multiple_rewards_per_type: true
    }).then(function (userRewards) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: userRewards
        }
      });
    })["catch"](function () {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: []
        }
      });
    });
  };
}
function doClaimRewardType(rewardType) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch, getState) {
    var state = getState();
    var userIsRewardApproved = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectUserIsRewardApproved"])(state);
    var unclaimedRewards = Object(redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__["selectUnclaimedRewards"])(state);
    var reward = rewardType === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE ? {
      reward_type: rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE
    } : unclaimedRewards.find(function (ur) {
      return ur.reward_type === rewardType;
    });

    if (rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REWARD_CODE) {
      if (!reward || reward.transaction_id) {
        // already claimed or doesn't exist, do nothing
        return;
      }
    }

    if (!userIsRewardApproved && rewardType !== rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_CONFIRM_EMAIL) {
      if (!options || !options.failSilently && rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.rewardApprovalRequested) {
        rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.rewardApprovalRequested();
      }

      return;
    } // Set `claim_code` so the api knows which reward to give if there are multiple of the same type


    var params = options.params || {};
    params.claim_code = reward.claim_code;
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_STARTED,
      data: {
        reward: reward
      }
    });

    var success = function success(successReward) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_SUCCESS,
        data: {
          reward: successReward
        }
      });

      if (successReward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_NEW_USER && rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.claimFirstRewardSuccess) {
        rewards__WEBPACK_IMPORTED_MODULE_5__["default"].callbacks.claimFirstRewardSuccess();
      } else if (successReward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_REFERRAL) {
        dispatch(Object(redux_actions_user__WEBPACK_IMPORTED_MODULE_4__["doFetchInviteStatus"])());
      }

      dispatch(doRewardList());
    };

    var failure = function failure(error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_FAILURE,
        data: {
          reward: reward,
          error: !options || !options.failSilently ? error : undefined
        }
      });

      if (options.notifyError) {
        dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doToast"])({
          message: error.message,
          isError: true
        }));
      }
    };

    rewards__WEBPACK_IMPORTED_MODULE_5__["default"].claimReward(rewardType, params).then(success, failure);
  };
}
function doClaimEligiblePurchaseRewards() {
  return function (dispatch, getState) {
    var state = getState();
    var unclaimedRewards = Object(redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_2__["selectUnclaimedRewards"])(state);
    var userIsRewardApproved = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectUserIsRewardApproved"])(state);

    if (!userIsRewardApproved || !lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].enabled) {
      return;
    }

    if (unclaimedRewards.find(function (ur) {
      return ur.reward_type === rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FIRST_STREAM;
    })) {
      dispatch(doClaimRewardType(rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FIRST_STREAM));
    } else {
      [rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_MANY_DOWNLOADS, rewards__WEBPACK_IMPORTED_MODULE_5__["default"].TYPE_FEATURED_DOWNLOAD].forEach(function (type) {
        dispatch(doClaimRewardType(type, {
          failSilently: true
        }));
      });
    }
  };
}
function doClaimRewardClearError(reward) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].CLAIM_REWARD_CLEAR_ERROR,
      data: {
        reward: reward
      }
    });
  };
}
function doFetchRewardedContent() {
  return function (dispatch) {
    var success = function success(nameToClaimId) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    var failure = function failure() {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('reward', 'list_featured').then(success, failure);
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardsByType", function() { return selectUnclaimedRewardsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsById", function() { return selectClaimedRewardsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewards", function() { return selectClaimedRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimedRewardsByTransactionId", function() { return selectClaimedRewardsByTransactionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewards", function() { return selectUnclaimedRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingRewards", function() { return selectFetchingRewards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnclaimedRewardValue", function() { return selectUnclaimedRewardValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimsPendingByType", function() { return selectClaimsPendingByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsRewardClaimPending", function() { return makeSelectIsRewardClaimPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectClaimErrorsByType", function() { return selectClaimErrorsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectClaimRewardError", function() { return makeSelectClaimRewardError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardByType", function() { return makeSelectRewardByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectRewardAmountByType", function() { return makeSelectRewardAmountByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRewardContentClaimIds", function() { return selectRewardContentClaimIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReferralReward", function() { return selectReferralReward; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



var selectState = function selectState(state) {
  return state.rewards || {};
};

var selectUnclaimedRewardsByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.unclaimedRewardsByType;
});
var selectClaimedRewardsById = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimedRewardsById;
});
var selectClaimedRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimedRewardsById, function (byId) {
  return Object.values(byId) || [];
});
var selectClaimedRewardsByTransactionId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimedRewards, function (rewards) {
  return rewards.reduce(function (mapParam, reward) {
    var map = mapParam;
    map[reward.transaction_id] = reward;
    return map;
  }, {});
});
var selectUnclaimedRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.unclaimedRewards;
});
var selectFetchingRewards = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return !!state.fetching;
});
var selectUnclaimedRewardValue = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUnclaimedRewards, function (rewards) {
  return rewards.reduce(function (sum, reward) {
    return sum + reward.reward_amount;
  }, 0);
});
var selectClaimsPendingByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimPendingByType;
});

var selectIsClaimRewardPending = function selectIsClaimRewardPending(state, props) {
  return selectClaimsPendingByType(state, props)[props.reward_type];
};

var makeSelectIsRewardClaimPending = function makeSelectIsRewardClaimPending() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIsClaimRewardPending, function (isClaiming) {
    return isClaiming;
  });
};
var selectClaimErrorsByType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claimErrorsByType;
});

var selectClaimRewardError = function selectClaimRewardError(state, props) {
  return selectClaimErrorsByType(state, props)[props.reward_type];
};

var makeSelectClaimRewardError = function makeSelectClaimRewardError() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectClaimRewardError, function (errorMessage) {
    return errorMessage;
  });
};

var selectRewardByType = function selectRewardByType(state, rewardType) {
  return selectUnclaimedRewards(state).find(function (reward) {
    return reward.reward_type === rewardType;
  });
};

var makeSelectRewardByType = function makeSelectRewardByType() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRewardByType, function (reward) {
    return reward;
  });
};
var makeSelectRewardAmountByType = function makeSelectRewardAmountByType() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRewardByType, function (reward) {
    return reward ? reward.reward_amount : 0;
  });
};
var selectRewardContentClaimIds = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.rewardedContentClaimIds;
});
var selectReferralReward = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUnclaimedRewards, function (unclaimedRewards) {
  return unclaimedRewards.filter(function (reward) {
    return reward.reward_type === rewards__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE_REFERRAL;
  })[0];
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationIsPending", function() { return selectAuthenticationIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsPending", function() { return selectUserIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserEmail", function() { return selectUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserPhone", function() { return selectUserPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckId", function() { return selectUserCheckId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserEmailLogin", function() { return selectUserEmailLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckType", function() { return selectUserCheckType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserCheckValue", function() { return selectUserCheckValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailToVerify", function() { return selectEmailToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneToVerify", function() { return selectPhoneToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsRewardApproved", function() { return selectUserIsRewardApproved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewIsPending", function() { return selectEmailNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserLoggedOut", function() { return selectUserLoggedOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailNewErrorMessage", function() { return selectEmailNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewErrorMessage", function() { return selectPhoneNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyIsPending", function() { return selectEmailVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmailVerifyErrorMessage", function() { return selectEmailVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneNewIsPending", function() { return selectPhoneNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyIsPending", function() { return selectPhoneVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPhoneVerifyErrorMessage", function() { return selectPhoneVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserReport", function() { return selectUserReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyIsPending", function() { return selectIdentityVerifyIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIdentityVerifyErrorMessage", function() { return selectIdentityVerifyErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserIsVerificationCandidate", function() { return selectUserIsVerificationCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAccessToken", function() { return selectAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusIsPending", function() { return selectUserInviteStatusIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitesRemaining", function() { return selectUserInvitesRemaining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInvitees", function() { return selectUserInvitees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteStatusFailed", function() { return selectUserInviteStatusFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewIsPending", function() { return selectUserInviteNewIsPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteNewErrorMessage", function() { return selectUserInviteNewErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInviteReferralLink", function() { return selectUserInviteReferralLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSavedUserData", function() { return selectSavedUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserNotificationData", function() { return selectUserNotificationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserNotificationCallbackData", function() { return selectUserNotificationCallbackData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUpdatedUserData", function() { return selectUpdatedUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHelpResponse", function() { return selectHelpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeedbackResponse", function() { return selectFeedbackResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredSearchList", function() { return selectFilteredSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterResultsVisible", function() { return selectFilterResultsVisible; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.user || {};
};
var selectAuthenticationIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authenticationIsPending;
});
var selectUserIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.userIsPending;
});
var selectUser = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.user;
});
var selectUserEmail = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.primary_email : null;
});
var selectUserPhone = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user ? user.mobileNo : null;
});
var selectUserCheckId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.isNewUser;
});
var selectUserEmailLogin = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.isLoggedIn;
});
var selectUserCheckType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inputType;
});
var selectUserCheckValue = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.input;
}); // export const selectUserCountryCode = createSelector(
//   selectUser,
//   user => (user ? user.country_code : null)
// );

var selectEmailToVerify = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectUserEmail, function (state, userEmail) {
  return state.emailToVerify || userEmail;
});
var selectPhoneToVerify = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.input;
});
var selectUserIsRewardApproved = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user && user.is_reward_approved;
});
var selectEmailNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailNewIsPending;
});
var selectUserLoggedOut = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.isLoggedIn;
});
var selectEmailNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailNewErrorMessage;
});
var selectPhoneNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneNewErrorMessage;
});
var selectEmailVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailVerifyIsPending;
});
var selectEmailVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.emailVerifyErrorMessage;
});
var selectPhoneNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneNewIsPending && state.otpSent;
});
var selectPhoneVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneVerifyIsPending;
});
var selectPhoneVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.phoneVerifyErrorMessage;
});
var selectUserReport = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.claim_id && state.report_type;
});
var selectIdentityVerifyIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.identityVerifyIsPending;
});
var selectIdentityVerifyErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.identityVerifyErrorMessage;
});
var selectUserIsVerificationCandidate = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUser, function (user) {
  return user && (!user.has_verified_email || !user.is_identity_verified);
});
var selectAccessToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.accessToken;
});
var selectUserInviteStatusIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteStatusIsPending;
});
var selectUserInvitesRemaining = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.invitesRemaining;
});
var selectUserInvitees = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.invitees;
});
var selectUserInviteStatusFailed = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUserInvitesRemaining, function () {
  return selectUserInvitesRemaining === null;
});
var selectUserInviteNewIsPending = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteNewIsPending;
});
var selectUserInviteNewErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.inviteNewErrorMessage;
});
var selectUserInviteReferralLink = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.referralLink;
});
var selectSavedUserData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.profileData;
});
var selectUserNotificationData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.notificationData;
});
var selectUserNotificationCallbackData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.notificationCallbackData;
});
var selectUpdatedUserData = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.name && state.dob && state.gender && state.description;
});
var selectHelpResponse = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.response;
});
var selectFeedbackResponse = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.response;
});
var selectFilteredSearchList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.filteredSearchList;
});
var selectFilterResultsVisible = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.filterResultsVisible;
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchInviteStatus", function() { return doFetchInviteStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doInstallNew", function() { return doInstallNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAuthenticate", function() { return doAuthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserFetch", function() { return doUserFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserCheckEmailVerified", function() { return doUserCheckEmailVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneReset", function() { return doUserPhoneReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneNew", function() { return doUserPhoneNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerifyFailure", function() { return doUserPhoneVerifyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserPhoneVerify", function() { return doUserPhoneVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserMobileVerify", function() { return doUserMobileVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserLogout", function() { return doUserLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserReport", function() { return doUserReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailToVerify", function() { return doUserEmailToVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailNew", function() { return doUserEmailNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailLogin", function() { return doUserEmailLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserResendVerificationEmail", function() { return doUserResendVerificationEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerifyFailure", function() { return doUserEmailVerifyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserEmailVerify", function() { return doUserEmailVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchAccessToken", function() { return doFetchAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserIdentityVerify", function() { return doUserIdentityVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserInviteNew", function() { return doUserInviteNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserCheckId", function() { return doUserCheckId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserProfileSave", function() { return doUserProfileSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserNotificationRegister", function() { return doUserNotificationRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserNotificationCallback", function() { return doUserNotificationCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserProfileUpdate", function() { return doUserProfileUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUserProfileFetch", function() { return doUserProfileFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSaveUserHelp", function() { return doSaveUserHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSaveUserFeedback", function() { return doSaveUserFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSearchWithFilters", function() { return doSearchWithFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFilterResultsVisible", function() { return doFilterResultsVisible; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var redux_actions_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function doFetchInviteStatus() {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_STARTED
    });
    Promise.all([lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'invite_status'), lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_referral_code', 'list')]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          status = _ref2[0],
          code = _ref2[1];

      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__["doRewardList"])());
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_SUCCESS,
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees,
          referralLink: "".concat(lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].CONNECTION_STRING, "user/refer?r=").concat(code)
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_FAILURE,
        data: {
          error: error
        }
      });
    });
  };
}
function doInstallNew(appVersion) {
  var os = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var payload = {
    app_version: appVersion
  };
  lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].status().then(function (status) {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    lbry_redux__WEBPACK_IMPORTED_MODULE_0__["Lbry"].version().then(function (version) {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('install', 'new', payload);
    });
  });
} // TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?

function doAuthenticate() {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_STARTED
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].authenticate().then(function (user) {
      // analytics.setUser(user);
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_SUCCESS,
        data: {
          user: user
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_FAILURE,
        data: {
          error: error
        }
      });
    });
  };
}
function doUserFetch() {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_STARTED
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentUser().then(function (user) {
      // analytics.setUser(user);
      dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__["doRewardList"])());
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_SUCCESS,
        data: {
          user: user
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_FAILURE,
        data: {
          error: error
        }
      });
    });
  };
}
function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentUser().then(function (user) {
      if (user.has_verified_email) {
        dispatch(Object(redux_actions_rewards__WEBPACK_IMPORTED_MODULE_1__["doRewardList"])());
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_SUCCESS,
          data: {
            user: user
          }
        });
      }
    });
  };
}
function doUserPhoneReset() {
  return {
    type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_RESET
  };
}
function doUserPhoneNew(phone, countryCode) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_STARTED,
      data: {
        phone: phone,
        country_code: countryCode
      }
    });

    var success = function success() {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_SUCCESS,
        data: {
          phone: phone
        }
      });
    };

    var failure = function failure(error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_FAILURE,
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_mobile', 'new', {
      mobileNo: phone
    }, 'post').then(success, failure);
  };
}
function doUserPhoneVerifyFailure(error) {
  return {
    type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_FAILURE,
    data: {
      error: error
    }
  };
}
function doUserPhoneVerify(verificationCode) {
  return function (dispatch, getState) {
    var phoneNumber = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectPhoneToVerify"])(getState()); // const countryCode = selectUserCountryCode(getState());

    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_mobile', 'phone_number_confirm', {
      verification_code: verificationCode,
      mobileNo: phoneNumber // country_code: countryCode,

    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_SUCCESS,
          data: {
            user: user
          }
        });
        dispatch(Object(redux_actions_homepage__WEBPACK_IMPORTED_MODULE_2__["doFetchFeaturedUris"])());
      }
    })["catch"](function (error) {
      return dispatch(doUserPhoneVerifyFailure(error));
    });
  };
}
function doUserMobileVerify(mobileNo, verificationCode) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_mobile', 'phone_number_confirm', {
      verification_code: verificationCode,
      mobileNo: mobileNo // country_code: countryCode,

    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_SUCCESS,
          data: {
            user: user
          }
        });
        dispatch(Object(redux_actions_homepage__WEBPACK_IMPORTED_MODULE_2__["doFetchFeaturedUris"])());
      }
    })["catch"](function (error) {
      return dispatch(doUserPhoneVerifyFailure(error));
    });
  };
}
function doUserLogout() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'logout', {}, 'post').then(function (data) {
      if (data.user_id === '' || data.user_id === null || data.user_id === undefined) {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_LOGOUT_SUCCESS,
          data: {
            data: data
          }
        });
      }
    });
  };
} // eslint-disable-next-line camelcase

function doUserReport(report_type, report_reason, claim_id) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('api', 'report', {
      report_type: report_type,
      report_reason: report_reason,
      claim_id: claim_id
    }, 'post').then(function (data) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_REPORT_SUCCESS,
        data: {
          data: data
        }
      });
    });
  };
}
function doUserEmailToVerify(email) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_SET,
      data: {
        email: email
      }
    });
  };
}
function doUserEmailNew(email, password) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_STARTED,
      email: email
    });

    var success = function success() {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_SUCCESS,
        data: {
          email: email
        }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_FAILURE,
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_email', 'new', {
      email: email,
      password: password,
      send_verification_email: true
    }, 'post')["catch"](function (error) {
      if (error.response && error.response.status === 409) {
        return lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_email', 'resend_token', {
          email: email,
          only_if_expired: true
        }, 'post').then(success, failure);
      }

      throw error;
    }).then(success, failure);
  };
}
function doUserEmailLogin(email, password) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_email', 'login', {
      email: email,
      password: password
    }, 'post').then(function (data) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_LOGIN,
        data: {
          data: data
        }
      });
      dispatch(Object(redux_actions_homepage__WEBPACK_IMPORTED_MODULE_2__["doFetchFeaturedUris"])());
    })["catch"](function (error) {
      throw new Error('User Email Login Error ', error);
    });
  };
}
function doUserResendVerificationEmail(email) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_RETRY,
      email: email
    });

    var success = function success() {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_SUCCESS,
        data: {
          email: email
        }
      });
      dispatch(doUserFetch());
    };

    var failure = function failure(error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_FAILURE,
        data: {
          error: error
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_email', 'resend_token', {
      email: email
    }, 'post')["catch"](function (error) {
      if (error.response && error.response.status === 409) {
        throw error;
      }
    }).then(success, failure);
  };
}
function doUserEmailVerifyFailure(error) {
  return {
    type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_FAILURE,
    data: {
      error: error
    }
  };
}
function doUserEmailVerify(verificationToken, recaptcha) {
  return function (dispatch, getState) {
    var email = Object(redux_selectors_user__WEBPACK_IMPORTED_MODULE_3__["selectEmailToVerify"])(getState());
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha: recaptcha
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_email', 'confirm', {
      verification_token: verificationToken,
      email: email,
      recaptcha: recaptcha
    }, 'post').then(function (userEmail) {
      if (userEmail.is_verified) {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_SUCCESS,
          data: {
            email: email
          }
        });
        dispatch(doUserFetch());
      } else {
        throw new Error('Your email is still not verified.'); // shouldn't happen
      }
    })["catch"](function (error) {
      return dispatch(doUserEmailVerifyFailure(error));
    });
  };
}
function doFetchAccessToken() {
  return function (dispatch) {
    var success = function success(token) {
      return dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_ACCESS_TOKEN_SUCCESS,
        data: {
          token: token
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].getAuthToken().then(success);
  };
}
function doUserIdentityVerify(stripeToken) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'verify_identity', {
      stripe_token: stripeToken
    }, 'post').then(function (user) {
      if (user.is_identity_verified) {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_SUCCESS,
          data: {
            user: user
          }
        });
      } else {
        throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
      }
    })["catch"](function (error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_FAILURE,
        data: {
          error: error.toString()
        }
      });
    });
  };
}
function doUserInviteNew(email) {
  return function (dispatch) {
    dispatch({
      type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_STARTED
    });
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'invite', {
      email: email
    }, 'post').then(function () {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_SUCCESS,
        data: {
          email: email
        }
      });
      dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_0__["doToast"])({
        message: __('Invite sent to %s', email)
      }));
      dispatch(doFetchInviteStatus());
    })["catch"](function (error) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_FAILURE,
        data: {
          error: error
        }
      });
    });
  };
}
function doUserCheckId(input) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'check_id', {
      input: input
    }, 'post').then(function (user) {
      if (user.type === 'mobile') {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_VERIFY_ID,
          data: {
            user: user
          }
        }); // dispatch(doUserPhoneNew(user.value));
      } else if (user.type === 'email') {
        dispatch({
          type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_VERIFY_ID,
          data: {
            user: user
          }
        });
        dispatch(doUserEmailNew());
      } else throw new Error('Your email or mobile check gone wrong in Api');
    })["catch"](function (error) {
      throw new Error('User receiving Error ', error);
    });
  };
}
function doUserProfileSave(name, dob, number, gender, description, email) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'profile_save', {
      name: name,
      dob: dob,
      number: number,
      gender: gender,
      description: description,
      email: email
    }, 'post').then(function (userData) {
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["USER_PROFILE_SAVE"],
        data: {
          profileData: userData.profile
        }
      });
    });
  };
} // eslint-disable-next-line camelcase

function doUserNotificationRegister(device_token, device_type) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_notification', 'notification_register', {
      device_token: device_token,
      device_type: device_type
    }, 'post').then(function (data) {
      console.log('Notification Register result is ', data);
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_REGISTER"],
        data: {
          notificationData: data
        }
      });
    })["catch"](function (error) {
      throw new Error('User receiving Error ', error);
    });
  };
} // eslint-disable-next-line camelcase

function doUserNotificationCallback(device_token) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user_notification', 'notification_callback', {
      device_token: device_token
    }, 'post').then(function (data) {
      console.log('Notification callback result is ', data, data[0]);
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["NOTIFICATION_CALLBACK"],
        data: {
          notificationCallbackData: data[0]
        }
      });
    })["catch"](function (error) {
      throw new Error('User receiving Error ', error);
    });
  };
}
function doUserProfileUpdate(name, dob, gender, description) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'profile_update', {
      name: name,
      dob: dob,
      gender: gender,
      description: description
    }, 'post').then(function (userData) {
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["USER_PROFILE_UPDATE"],
        data: {
          profileData: userData.profile
        }
      });
    });
  };
}
function doUserProfileFetch() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('user', 'profile_fetch').then(function (res) {
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["USER_PROFILE_FETCH"],
        data: {
          profileData: res[0].profile
        }
      });
    });
  };
}
function doSaveUserHelp(issue, message) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('helpandfeedback', 'help', {
      issue: issue,
      message: message
    }, 'post').then(function (response) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SAVE_USER_HELP,
        data: response
      });
    });
  };
}
function doSaveUserFeedback(value1, value2, value3, value4) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('helpandfeedback', 'feedback', {
      value1: value1,
      value2: value2,
      value3: value3,
      value4: value4
    }, 'post').then(function (response) {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SAVE_USER_FEEDBACK,
        data: response
      });
    });
  };
} // Search with filters -- Views | Likes | Upload Time

function doSearchWithFilters(string, viewFilter, timeFilter, visible) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_4__["default"].call('file', 'search', {
      search_string: string,
      view_filter: viewFilter,
      time_filter: timeFilter
    }).then(function (res) {
      dispatch({
        type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["SEARCH_QUERY_FILTERS"],
        data: {
          filteredSearchList: res,
          filterResultsVisible: visible
        }
      });
    });
  };
}
function doFilterResultsVisible(visible) {
  return function (dispatch) {
    dispatch({
      type: _constants_action_types__WEBPACK_IMPORTED_MODULE_5__["SEARCH_FILTER_VISIBLE"],
      data: {
        filterResultsVisible: visible
      }
    });
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchFeaturedUris", function() { return doFetchFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchTrendingUris", function() { return doFetchTrendingUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchContentCategory", function() { return doFetchContentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchRecentList", function() { return doFetchRecentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchNotInterestedList", function() { return doFetchNotInterestedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doNotInterested", function() { return doNotInterested; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function doFetchFeaturedUris() {
  var offloadResolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_STARTED"]
    });

    var success = function success(_ref) {
      var Uris = _ref.Uris;
      var urisToResolve = [];
      Object.keys(Uris).forEach(function (category) {
        urisToResolve = [].concat(_toConsumableArray(urisToResolve), _toConsumableArray(Uris[category]));
      });
      var actions = [{
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_COMPLETED"],
        data: {
          uris: Uris,
          success: true
        }
      }];

      if (urisToResolve.length && !offloadResolve) {
        actions.push(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doResolveUris"])(urisToResolve));
      }

      dispatch(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["batchActions"].apply(void 0, actions));
    };

    var failure = function failure() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_FEATURED_CONTENT_COMPLETED"],
        data: {
          uris: {}
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_homepage').then(success, failure);
  };
}
function doFetchTrendingUris() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_STARTED"]
    });

    var success = function success(data) {
      var urisToResolve = data.map(function (uri) {
        return uri.url;
      });
      var actions = [Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["doResolveUris"])(urisToResolve), {
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_COMPLETED"],
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["batchActions"].apply(void 0, actions));
    };

    var failure = function failure() {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_TRENDING_CONTENT_COMPLETED"],
        data: {
          uris: []
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_trending').then(success, failure);
  };
} // eslint-disable-next-line camelcase

function doFetchContentCategory(content_category) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'fetchContentCategory', {
      content_category: content_category
    }, 'post').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_CONTENT_CATEGORY"],
        data: {
          uris: data
        }
      });
    });
  };
}
function doFetchRecentList() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'recent_list').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_RECENT_LIST"],
        data: data
      });
    });
  };
}
function doFetchNotInterestedList() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'not_interested_list').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_NOT_INTERESTED_LIST"],
        data: {
          data: data
        }
      });
    });
  };
} // eslint-disable-next-line camelcase

function doNotInterested(claim_id) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'not_interested', {
      claim_id: claim_id
    }, 'post').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_2__["NOT_INTERESTED_CONTENT"],
        data: data
      });
    });
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetViewMode", function() { return doSetViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubscriptionLatest", function() { return setSubscriptionLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateUnreadSubscriptions", function() { return doUpdateUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscriptions", function() { return doRemoveUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveUnreadSubscription", function() { return doRemoveUnreadSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscription", function() { return doCheckSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscribe", function() { return doChannelSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelUnsubscribe", function() { return doChannelUnsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptions", function() { return doCheckSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchMySubscriptions", function() { return doFetchMySubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCheckSubscriptionsInit", function() { return doCheckSubscriptionsInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchRecommendedSubscriptions", function() { return doFetchRecommendedSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCompleteFirstRun", function() { return doCompleteFirstRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doShowSuggestedSubs", function() { return doShowSuggestedSubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionEnableNotifications", function() { return doChannelSubscriptionEnableNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doChannelSubscriptionDisableNotifications", function() { return doChannelSubscriptionDisableNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCountSubscriptions", function() { return doCountSubscriptions; });
/* harmony import */ var constants_claim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { doClaimRewardType } from 'redux/actions/rewards';







var CHECK_SUBSCRIPTIONS_INTERVAL = 15 * 60 * 1000;
var SUBSCRIPTION_DOWNLOAD_LIMIT = 1;
var doSetViewMode = function doSetViewMode(viewMode) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SET_VIEW_MODE"],
      data: viewMode
    });
  };
};
var setSubscriptionLatest = function setSubscriptionLatest(subscription, uri) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SET_SUBSCRIPTION_LATEST"],
      data: {
        subscription: subscription,
        uri: uri
      }
    });
  };
}; // Populate a channels unread subscriptions or update the type

var doUpdateUnreadSubscriptions = function doUpdateUnreadSubscriptions(channelUri, uris, type) {
  return function (dispatch, getState) {
    var state = getState();
    var unreadByChannel = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_1__["selectUnreadByChannel"])(state);
    var currentUnreadForChannel = unreadByChannel[channelUri];
    var newUris = [];
    var newType = null;

    if (!currentUnreadForChannel) {
      newUris = uris;
      newType = type;
    } else {
      if (uris) {
        // If a channel currently has no unread uris, just add them all
        if (!currentUnreadForChannel.uris || !currentUnreadForChannel.uris.length) {
          newUris = uris;
        } else {
          // They already have unreads and now there are new ones
          // Add the new ones to the beginning of the list
          // Make sure there are no duplicates
          var currentUnreadUris = currentUnreadForChannel.uris;
          newUris = uris.filter(function (uri) {
            return !currentUnreadUris.includes(uri);
          }).concat(currentUnreadUris);
        }
      } else {
        newUris = currentUnreadForChannel.uris;
      }

      newType = type || currentUnreadForChannel.type;
    }

    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_SUBSCRIPTION_UNREADS"],
      data: {
        channel: channelUri,
        uris: newUris,
        type: newType
      }
    });
  };
}; // Remove multiple files (or all) from a channels unread subscriptions

var doRemoveUnreadSubscriptions = function doRemoveUnreadSubscriptions(channelUri, readUris) {
  return function (dispatch, getState) {
    var state = getState();
    var unreadByChannel = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_1__["selectUnreadByChannel"])(state); // If no channel is passed in, remove all unread subscriptions from all channels

    if (!channelUri) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_SUBSCRIPTION_UNREADS"],
        data: {
          channel: null
        }
      });
    }

    var currentChannelUnread = unreadByChannel[channelUri];

    if (!currentChannelUnread || !currentChannelUnread.uris) {
      // Channel passed in doesn't have any unreads
      return null;
    } // For each uri passed in, remove it from the list of unread uris
    // If no uris are passed in, remove them all


    var newUris;

    if (readUris) {
      var urisToRemoveMap = readUris.reduce(function (acc, val) {
        return _objectSpread({}, acc, _defineProperty({}, val, true));
      }, {});
      var filteredUris = currentChannelUnread.uris.filter(function (uri) {
        return !urisToRemoveMap[uri];
      });
      newUris = filteredUris.length ? filteredUris : null;
    } else {
      newUris = null;
    }

    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_SUBSCRIPTION_UNREADS"],
      data: {
        channel: channelUri,
        uris: newUris
      }
    });
  };
}; // Remove a single file from a channels unread subscriptions

var doRemoveUnreadSubscription = function doRemoveUnreadSubscription(channelUri, readUri) {
  return function (dispatch) {
    dispatch(doRemoveUnreadSubscriptions(channelUri, [readUri]));
  };
};
var doCheckSubscription = function doCheckSubscription(subscriptionUri, shouldNotify) {
  return function (dispatch, getState) {
    // no dispatching FETCH_CHANNEL_CLAIMS_STARTED; causes loading issues on <SubscriptionsPage>
    var state = getState();
    var shouldAutoDownload = false; // makeSelectClientSetting(SETTINGS.AUTO_DOWNLOAD)(state);

    var savedSubscription = state.subscriptions.subscriptions.find(function (sub) {
      return sub.uri === subscriptionUri;
    });

    if (!savedSubscription) {
      throw Error("Trying to find new content for ".concat(subscriptionUri, " but it doesn't exist in your subscriptions"));
    }

    var _parseURI = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(subscriptionUri),
        claimId = _parseURI.claimId; // We may be duplicating calls here. Can this logic be baked into doFetchClaimsByChannel?


    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].claim_search({
      channel_id: claimId,
      page: 1,
      page_size: constants_claim__WEBPACK_IMPORTED_MODULE_0__["PAGE_SIZE"]
    }).then(function (result) {
      var claimsInChannel = result.items; // may happen if subscribed to an abandoned channel or an empty channel

      if (!claimsInChannel || !claimsInChannel.length) {
        return;
      } // Determine if the latest subscription currently saved is actually the latest subscription


      var latestIndex = claimsInChannel.findIndex(function (claim) {
        return "".concat(claim.name, "#").concat(claim.claim_id) === savedSubscription.latest;
      }); // If latest is -1, it is a newly subscribed channel or there have been 10+ claims published since last viewed

      var latestIndexToNotify = latestIndex === -1 ? 10 : latestIndex; // If latest is 0, nothing has changed
      // Do not download/notify about new content, it would download/notify 10 claims per channel

      if (latestIndex !== 0 && savedSubscription.latest) {
        var downloadCount = 0;
        var newUnread = [];
        claimsInChannel.slice(0, latestIndexToNotify).forEach(function (claim) {
          var uri = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["buildURI"])({
            contentName: claim.name,
            claimId: claim.claim_id
          }, true);
          var shouldDownload = shouldAutoDownload && Boolean(downloadCount < SUBSCRIPTION_DOWNLOAD_LIMIT && !claim.value.stream.metadata.fee); // Add the new content to the list of "un-read" subscriptions

          if (shouldNotify) {
            newUnread.push(uri);
          }

          if (shouldDownload) {
            downloadCount += 1;
            dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["doPurchaseUri"])(uri, {
              cost: 0
            }, true));
          }
        });
        dispatch(doUpdateUnreadSubscriptions(subscriptionUri, newUnread, downloadCount > 0 ? constants_subscriptions__WEBPACK_IMPORTED_MODULE_4__["DOWNLOADING"] : constants_subscriptions__WEBPACK_IMPORTED_MODULE_4__["NOTIFY_ONLY"]));
      } // Set the latest piece of content for a channel
      // This allows the app to know if there has been new content since it was last set


      dispatch(setSubscriptionLatest({
        channelName: claimsInChannel[0].channel_name,
        uri: Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["buildURI"])({
          channelName: claimsInChannel[0].channel_name,
          claimId: claimsInChannel[0].claim_id
        }, false)
      }, Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["buildURI"])({
        contentName: claimsInChannel[0].name,
        claimId: claimsInChannel[0].claim_id
      }, false))); // calling FETCH_CHANNEL_CLAIMS_COMPLETED after not calling STARTED
      // means it will delete a non-existant fetchingChannelClaims[uri]

      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_CHANNEL_CLAIMS_COMPLETED"],
        data: {
          uri: subscriptionUri,
          claims: claimsInChannel || [],
          page: 1
        }
      });
    });
  };
};
var doChannelSubscribe = function doChannelSubscribe(subscription) {
  return function (dispatch, getState) {
    var _getState = getState(),
        daemonSettings = _getState.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
    var subscriptionUri = subscription.uri;

    if (!subscriptionUri.startsWith('lbry://')) {
      throw Error("Subscription uris must inclue the \"lbry://\" prefix.\nTried to subscribe to ".concat(subscriptionUri));
    }

    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["CHANNEL_SUBSCRIBE"],
      data: subscription
    }); // if the user isn't sharing data, keep the subscriptions entirely in the app

    if (isSharingData) {
      var _parseURI2 = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(subscription.uri),
          claimId = _parseURI2.claimId; // They are sharing data, we can store their subscriptions in our internal database


      lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'new', {
        channel_name: subscription.channelName,
        claim_id: claimId
      }); // dispatch(doClaimRewardType(rewards.TYPE_SUBSCRIPTION, { failSilently: true }));
    }

    dispatch(doCheckSubscription(subscription.uri, true));
  };
};
var doChannelUnsubscribe = function doChannelUnsubscribe(subscription) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        daemonSettings = _getState2.settings.daemonSettings;

    var isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["CHANNEL_UNSUBSCRIBE"],
      data: subscription
    });

    if (isSharingData) {
      var _parseURI3 = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(subscription.uri),
          claimId = _parseURI3.claimId;

      lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'delete', {
        claim_id: claimId
      });
    }
  };
};
var doCheckSubscriptions = function doCheckSubscriptions() {
  return function (dispatch, getState) {
    var state = getState();
    var subscriptions = Object(redux_selectors_subscriptions__WEBPACK_IMPORTED_MODULE_1__["selectSubscriptions"])(state);
    subscriptions.forEach(function (sub) {
      dispatch(doCheckSubscription(sub.uri, true));
    });
  };
};
var doFetchMySubscriptions = function doFetchMySubscriptions() {
  return function (dispatch, getState) {
    var state = getState();
    var reduxSubscriptions = state.subscriptions.subscriptions; // default to true if daemonSettings not found

    var isSharingData = state.settings && state.settings.daemonSettings ? state.settings.daemonSettings.share_usage_data : true;

    if (!isSharingData && isSharingData !== undefined) {
      // They aren't sharing their data, subscriptions will be handled by persisted redux state
      return;
    } // most of this logic comes from scenarios where the db isn't synced with redux
    // this will happen if the user stops sharing data


    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_SUBSCRIPTIONS_START"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'list').then(function (dbSubscriptions) {
      var storedSubscriptions = dbSubscriptions || []; // User has no subscriptions in db or redux

      if (!storedSubscriptions.length && (!reduxSubscriptions || !reduxSubscriptions.length)) {
        return [];
      } // There is some mismatch between redux state and db state
      // If something is in the db, but not in redux, add it to redux
      // If something is in redux, but not in the db, add it to the db


      if (storedSubscriptions.length !== reduxSubscriptions.length) {
        var dbSubMap = {};
        var reduxSubMap = {};
        var subsNotInDB = [];
        var subscriptionsToReturn = reduxSubscriptions.slice();
        storedSubscriptions.forEach(function (sub) {
          dbSubMap[sub.claim_id] = 1;
        });
        reduxSubscriptions.forEach(function (sub) {
          var _parseURI4 = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(sub.uri),
              claimId = _parseURI4.claimId;

          reduxSubMap[claimId] = 1;

          if (!dbSubMap[claimId]) {
            subsNotInDB.push({
              claim_id: claimId,
              channel_name: sub.channelName
            });
          }
        });
        storedSubscriptions.forEach(function (sub) {
          if (!reduxSubMap[sub.claim_id]) {
            var uri = "lbry://".concat(sub.channel_name, "#").concat(sub.claim_id);
            subscriptionsToReturn.push({
              uri: uri,
              channelName: sub.channel_name
            });
          }
        });
        return Promise.all(subsNotInDB.map(function (payload) {
          return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'new', payload);
        })).then(function () {
          return subscriptionsToReturn;
        })["catch"](function () {
          return (// let it fail, we will try again when the navigate to the subscriptions page
            subscriptionsToReturn
          );
        });
      } // DB is already synced, just return the subscriptions in redux


      return reduxSubscriptions;
    }).then(function (subscriptions) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_SUBSCRIPTIONS_SUCCESS"],
        data: subscriptions
      });
      dispatch(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["doResolveUris"])(subscriptions.map(function (_ref) {
        var uri = _ref.uri;
        return uri;
      })));
      dispatch(doCheckSubscriptions());
    })["catch"](function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_SUBSCRIPTIONS_FAIL"]
      });
    });
  };
};
var doCheckSubscriptionsInit = function doCheckSubscriptionsInit() {
  return function (dispatch) {
    // doCheckSubscriptionsInit is called by doDaemonReady
    // setTimeout below is a hack to ensure redux is hydrated when subscriptions are checked
    // this will be replaced with <PersistGate> which reqiures a package upgrade
    setTimeout(function () {
      return dispatch(doFetchMySubscriptions());
    }, 5000);
    var checkSubscriptionsTimer = setInterval(function () {
      return dispatch(doCheckSubscriptions());
    }, CHECK_SUBSCRIPTIONS_INTERVAL);
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["CHECK_SUBSCRIPTIONS_SUBSCRIBE"],
      data: {
        checkSubscriptionsTimer: checkSubscriptionsTimer
      }
    });
    setInterval(function () {
      return dispatch(doCheckSubscriptions());
    }, CHECK_SUBSCRIPTIONS_INTERVAL);
  };
};
var doFetchRecommendedSubscriptions = function doFetchRecommendedSubscriptions() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["GET_SUGGESTED_SUBSCRIPTIONS_START"]
    });
    return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'suggest').then(function (suggested) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS"],
        data: suggested
      });
    })["catch"](function (error) {
      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["GET_SUGGESTED_SUBSCRIPTIONS_FAIL"],
        error: error
      });
    });
  };
};
var doCompleteFirstRun = function doCompleteFirstRun() {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SUBSCRIPTION_FIRST_RUN_COMPLETED"]
    });
  };
};
var doShowSuggestedSubs = function doShowSuggestedSubs() {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["VIEW_SUGGESTED_SUBSCRIPTIONS"]
    });
  };
};
var doChannelSubscriptionEnableNotifications = function doChannelSubscriptionEnableNotifications(channelName) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS"],
      data: channelName
    });
  };
};
var doChannelSubscriptionDisableNotifications = function doChannelSubscriptionDisableNotifications(channelName) {
  return function (dispatch) {
    return dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS"],
      data: channelName
    });
  };
};
var doCountSubscriptions = function doCountSubscriptions(claimId) {
  return function (dispatch) {
    return lbryio__WEBPACK_IMPORTED_MODULE_5__["default"].call('subscription', 'count', {
      claim_id: claimId
    }).then(function (count) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_SUBSCRIPTION_COUNT"],
        data: {
          subscriptionCount: count
        }
      });
    });
  };
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMUM_PUBLISH_BID", function() { return MINIMUM_PUBLISH_BID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_ANONYMOUS", function() { return CHANNEL_ANONYMOUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_NEW", function() { return CHANNEL_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_SIZE", function() { return PAGE_SIZE; });
var MINIMUM_PUBLISH_BID = 0.00000001;
var CHANNEL_ANONYMOUS = 'anonymous';
var CHANNEL_NEW = 'new';
var PAGE_SIZE = 20;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionCount", function() { return selectSubscriptionCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptions", function() { return selectSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSubscriptions", function() { return selectIsFetchingSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewMode", function() { return selectViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSuggested", function() { return selectSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsFetchingSuggested", function() { return selectIsFetchingSuggested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSuggestedChannels", function() { return selectSuggestedChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFirstRunCompleted", function() { return selectFirstRunCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShowSuggestedSubs", function() { return selectShowSuggestedSubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionsBeingFetched", function() { return selectSubscriptionsBeingFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadByChannel", function() { return selectUnreadByChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadAmount", function() { return selectUnreadAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnreadSubscriptions", function() { return selectUnreadSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectUnreadByChannel", function() { return makeSelectUnreadByChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSubscriptionClaims", function() { return selectSubscriptionClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsSubscribed", function() { return makeSelectIsSubscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectIsNew", function() { return makeSelectIsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEnabledChannelNotifications", function() { return selectEnabledChannelNotifications; });
/* harmony import */ var constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util_swap_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Returns the entire subscriptions state

var selectState = function selectState(state) {
  return state.subscriptions || {};
}; // Returns the count


var selectSubscriptionCount = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.subscriptionCount;
}); // Returns the list of channel uris a user is subscribed to

var selectSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.subscriptions;
}); // Fetching list of users subscriptions

var selectIsFetchingSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.loading;
}); // The current view mode on the subscriptions page

var selectViewMode = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.viewMode;
}); // Suggested subscriptions from internal apis

var selectSuggested = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.suggested;
});
var selectIsFetchingSuggested = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.loadingSuggested;
});
var selectSuggestedChannels = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, selectSuggested, function (userSubscriptions, suggested) {
  if (!suggested) {
    return null;
  } // Swap the key/value because we will use the uri for everything, this just makes it easier
  // suggested is returned from the api with the form:
  // {
  //   featured: { "Channel label": uri, ... },
  //   top_subscribed: { "@channel": uri, ... }
  //   top_bid: { "@channel": uri, ... }
  // }
  // To properly compare the suggested subscriptions from our current subscribed channels
  // We only care about the uri, not the label
  // We also only care about top_subscribed and featured
  // top_bid could just be porn or a channel with no content


  var topSubscribedSuggestions = Object(util_swap_json__WEBPACK_IMPORTED_MODULE_3__["swapKeyAndValue"])(suggested[constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__["SUGGESTED_TOP_SUBSCRIBED"]]);
  var featuredSuggestions = Object(util_swap_json__WEBPACK_IMPORTED_MODULE_3__["swapKeyAndValue"])(suggested[constants_subscriptions__WEBPACK_IMPORTED_MODULE_0__["SUGGESTED_FEATURED"]]); // Make sure there are no duplicates
  // If a uri isn't already in the suggested object, add it

  var suggestedChannels = _objectSpread({}, topSubscribedSuggestions);

  Object.keys(featuredSuggestions).forEach(function (uri) {
    if (!suggestedChannels[uri]) {
      var channelLabel = featuredSuggestions[uri];
      suggestedChannels[uri] = channelLabel;
    }
  });
  userSubscriptions.forEach(function (_ref) {
    var uri = _ref.uri;
    // Note to passer bys:
    // Maybe we should just remove the `lbry://` prefix from subscription uris
    // Most places don't store them like that
    var subscribedUri = uri.slice('lbry://'.length);

    if (suggestedChannels[subscribedUri]) {
      delete suggestedChannels[subscribedUri];
    }
  });
  return Object.keys(suggestedChannels).map(function (uri) {
    return {
      uri: uri,
      label: suggestedChannels[uri]
    };
  }).slice(0, 5);
});
var selectFirstRunCompleted = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.firstRunCompleted;
});
var selectShowSuggestedSubs = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.showSuggestedSubs;
}); // Fetching any claims that are a part of a users subscriptions

var selectSubscriptionsBeingFetched = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectAllFetchingChannelClaims"], function (subscriptions, fetchingChannelClaims) {
  var fetchingSubscriptionMap = {};
  subscriptions.forEach(function (sub) {
    var isFetching = fetchingChannelClaims && fetchingChannelClaims[sub.uri];

    if (isFetching) {
      fetchingSubscriptionMap[sub.uri] = true;
    }
  });
  return fetchingSubscriptionMap;
});
var selectUnreadByChannel = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.unread;
}); // Returns the current total of unread subscriptions

var selectUnreadAmount = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadByChannel, function (unreadByChannel) {
  var unreadChannels = Object.keys(unreadByChannel);
  var badges = 0;

  if (!unreadChannels.length) {
    return badges;
  }

  unreadChannels.forEach(function (channel) {
    badges += unreadByChannel[channel].uris.length;
  });
  return badges;
}); // Returns the uris with channels as an array with the channel with the newest content first
// If you just want the `unread` state, use selectUnread

var selectUnreadSubscriptions = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadAmount, selectUnreadByChannel, lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsByUri"], function (unreadAmount, unreadByChannel, claimsByUri) {
  // determine which channel has the newest content
  var unreadList = [];

  if (!unreadAmount) {
    return unreadList;
  }

  var channelUriList = Object.keys(unreadByChannel); // There is only one channel with unread notifications

  if (unreadAmount === 1) {
    channelUriList.forEach(function (channel) {
      var unreadChannel = {
        channel: channel,
        uris: unreadByChannel[channel].uris
      };
      unreadList.push(unreadChannel);
    });
    return unreadList;
  }

  channelUriList.sort(function (channel1, channel2) {
    var latestUriFromChannel1 = unreadByChannel[channel1].uris[0];
    var latestClaimFromChannel1 = claimsByUri[latestUriFromChannel1] || {};
    var latestUriFromChannel2 = unreadByChannel[channel2].uris[0];
    var latestClaimFromChannel2 = claimsByUri[latestUriFromChannel2] || {};
    var latestHeightFromChannel1 = latestClaimFromChannel1.height || 0;
    var latestHeightFromChannel2 = latestClaimFromChannel2.height || 0;

    if (latestHeightFromChannel1 !== latestHeightFromChannel2) {
      return latestHeightFromChannel2 - latestHeightFromChannel1;
    }

    return 0;
  }).forEach(function (channel) {
    var unreadSubscription = unreadByChannel[channel];
    var unreadChannel = {
      channel: channel,
      uris: unreadSubscription.uris
    };
    unreadList.push(unreadChannel);
  });
  return unreadList;
}); // Returns all unread subscriptions for a uri passed in

var makeSelectUnreadByChannel = function makeSelectUnreadByChannel(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUnreadByChannel, function (unread) {
    return unread[uri];
  });
}; // Returns the first page of claims for every channel a user is subscribed to

var selectSubscriptionClaims = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectAllClaimsByChannel"], lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsById"], selectSubscriptions, selectUnreadByChannel, function (channelIds, allClaims, savedSubscriptions, unreadByChannel) {
  // no claims loaded yet
  if (!Object.keys(channelIds).length) {
    return [];
  }

  var fetchedSubscriptions = [];
  savedSubscriptions.forEach(function (subscription) {
    var channelClaims = []; // if subscribed channel has content

    if (channelIds[subscription.uri] && channelIds[subscription.uri]['1']) {
      // This will need to be more robust, we will want to be able to load more than the first page
      // Strip out any ids that will be shown as notifications
      var pageOneChannelIds = channelIds[subscription.uri]['1']; // we have the channel ids and the corresponding claims
      // loop over the list of ids and grab the claim

      pageOneChannelIds.forEach(function (id) {
        var grabbedClaim = allClaims[id];

        if (unreadByChannel[subscription.uri] && unreadByChannel[subscription.uri].uris.some(function (uri) {
          return uri.includes(id);
        })) {
          grabbedClaim.isNew = true;
        }

        channelClaims = channelClaims.concat([grabbedClaim]);
      });
    }

    fetchedSubscriptions = fetchedSubscriptions.concat(channelClaims);
  });
  return fetchedSubscriptions;
}); // Returns true if a user is subscribed to the channel associated with the uri passed in
// Accepts content or channel uris

var makeSelectIsSubscribed = function makeSelectIsSubscribed(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSubscriptions, Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["makeSelectChannelForClaimUri"])(uri, true), function (subscriptions, channelUri) {
    if (channelUri) {
      return subscriptions.some(function (sub) {
        return sub.uri === channelUri;
      });
    } // If we couldn't get a channel uri from the claim uri, the uri passed in might be a channel already


    var _parseURI = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["parseURI"])(uri),
        isChannel = _parseURI.isChannel;

    if (isChannel) {
      var uriWithPrefix = uri.startsWith('lbry://') ? uri : "lbry://".concat(uri);
      return subscriptions.some(function (sub) {
        return sub.uri === uriWithPrefix;
      });
    }

    return false;
  });
};
var makeSelectIsNew = function makeSelectIsNew(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(makeSelectIsSubscribed(uri), Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["makeSelectChannelForClaimUri"])(uri), selectUnreadByChannel, function (isSubscribed, channel, unreadByChannel) {
    if (!isSubscribed) {
      return false;
    }

    var unreadForChannel = unreadByChannel["lbry://".concat(channel)];

    if (unreadForChannel) {
      return unreadForChannel.uris.includes(uri);
    }

    return false; // If they are subscribed, check to see if this uri is in the list of unreads
  });
};
var selectEnabledChannelNotifications = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
  return state.enabledChannelNotifications;
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapKeyAndValue", function() { return swapKeyAndValue; });
function swapKeyAndValue(dict) {
  var ret = {}; // eslint-disable-next-line no-restricted-syntax

  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      ret[dict[key]] = key;
    }
  }

  return ret;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doReportType", function() { return doReportType; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);


function doReportType(reportType, claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('api', 'report', {
      claim_id: claimId,
      report_type: reportType
    }, 'post').then(function () {
      dispatch({
        type: lbry_redux__WEBPACK_IMPORTED_MODULE_1__["ACTIONS"].USER_REPORT_TYPE,
        data: {
          reportType: reportType,
          claimId: claimId
        }
      });
    })["catch"](function (error) {
      throw new Error(error);
    });
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchCostInfoForUri", function() { return doFetchCostInfoForUri; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);


 // eslint-disable-next-line import/prefer-default-export

function doFetchCostInfoForUri(uri) {
  return function (dispatch, getState) {
    var state = getState();
    var claim = Object(lbry_redux__WEBPACK_IMPORTED_MODULE_2__["selectClaimsByUri"])(state)[uri];
    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_COST_INFO_COMPLETED"],
        data: {
          uri: uri,
          costInfo: costInfo
        }
      });
    }

    var fee = claim.value ? claim.value.fee : undefined;

    if (fee === undefined) {
      resolve({
        cost: 0,
        includesData: true
      });
    } else if (fee.currency === 'LBC') {
      resolve({
        cost: fee.amount,
        includesData: true
      });
    } else {
      lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].getExchangeRates().then(function (_ref) {
        var LBC_USD = _ref.LBC_USD;
        resolve({
          cost: fee.amount / LBC_USD,
          includesData: true
        });
      });
    }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchBlackListedOutpoints", function() { return doFetchBlackListedOutpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doBlackListedOutpointsSubscribe", function() { return doBlackListedOutpointsSubscribe; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchBlackListedOutpoints() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_STARTED"]
    });

    var success = function success(_ref) {
      var outpoints = _ref.outpoints;
      var splitedOutpoints = [];
      outpoints.forEach(function (outpoint, index) {
        var _outpoint$split = outpoint.split(':'),
            _outpoint$split2 = _slicedToArray(_outpoint$split, 2),
            txid = _outpoint$split2[0],
            nout = _outpoint$split2[1];

        splitedOutpoints[index] = {
          txid: txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_COMPLETED"],
        data: {
          outpoints: splitedOutpoints,
          success: true
        }
      });
    };

    var failure = function failure(_ref2) {
      var error = _ref2.error;
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_BLACK_LISTED_CONTENT_FAILED"],
        data: {
          error: error,
          success: false
        }
      });
    };

    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'list_blocked').then(success, failure);
  };
}
function doBlackListedOutpointsSubscribe() {
  return function (dispatch) {
    dispatch(doFetchBlackListedOutpoints());
    setInterval(function () {
      return dispatch(doFetchBlackListedOutpoints());
    }, CHECK_BLACK_LISTED_CONTENT_INTERVAL);
  };
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchViewCount", function() { return doFetchViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRegView", function() { return doRegView; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doFetchViewCount(claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'view_count', {
      claim_id: claimId
    }).then(function (res) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["VIEW_COUNTER"],
        data: {
          viewCount: res.count
        }
      });
    });
  };
}
function doRegView(claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'view_count', {
      claim_id: claimId
    }, 'post').then(function (res) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["REG_VIEW"],
        data: {
          viewCount: res.count
        }
      });
    });
  };
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetSync", function() { return doSetSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetDefaultAccount", function() { return doSetDefaultAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGetSync", function() { return doGetSync; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_2__);



function doSetSync(oldHash, newHash, data) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_STARTED"]
    });
    lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data: data
    }, 'post').then(function (response) {
      if (!response.hash) {
        return dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"],
          data: {
            error: 'No hash returned for sync/set.'
          }
        });
      }

      return dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_COMPLETED"],
        data: {
          syncHash: response.hash
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"],
        data: {
          error: error
        }
      });
    });
  };
}
function doSetDefaultAccount() {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_DEFAULT_ACCOUNT"]
    });
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].account_list().then(function (accountList) {
      var accounts = accountList.lbc_mainnet;
      var defaultId;

      for (var i = 0; i < accounts.length; ++i) {
        if (accounts[i].satoshis > 0) {
          defaultId = accounts[i].id;
          break;
        }
      } // In a case where there's no balance on either account
      // assume the second (which is created after sync) as default


      if (!defaultId && accounts.length > 1) {
        defaultId = accounts[1].id;
      } // Set the default account


      if (defaultId) {
        lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].account_set({
          account_id: defaultId,
          "default": true
        });
      }
    });
  };
}
function doGetSync(password) {
  return function (dispatch) {
    dispatch({
      type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]
    });
    lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_hash().then(function (hash) {
      lbryio__WEBPACK_IMPORTED_MODULE_1__["default"].call('sync', 'get', {
        hash: hash
      }, 'post').then(function (response) {
        var data = {
          hasSyncedWallet: true
        };

        if (response.changed) {
          var syncHash = response.hash;
          data.syncHash = syncHash;
          lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
            password: password,
            data: response.data
          }).then(function (_ref) {
            var walletHash = _ref.hash,
                walletData = _ref.data;

            if (walletHash !== syncHash) {
              // different local hash, need to synchronise
              dispatch(doSetSync(syncHash, walletHash, walletData));
            } // set the default account


            dispatch(doSetDefaultAccount());
          });
        }

        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: data
        });
      })["catch"](function () {
        // user doesn't have a synced wallet
        dispatch({
          type: constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"],
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        }); // call sync_apply to get data to sync
        // first time sync. use any string for old hash

        lbry_redux__WEBPACK_IMPORTED_MODULE_2__["Lbry"].sync_apply({
          password: password
        }).then(function (_ref2) {
          var walletHash = _ref2.hash,
              data = _ref2.data;
          return dispatch(doSetSync(null, walletHash, data));
        });
      });
    });
  };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLikeOnClick", function() { return doLikeOnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doDislikeOnClick", function() { return doDislikeOnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLikeCount", function() { return doLikeCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLikeCheck", function() { return doLikeCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchLikedList", function() { return doFetchLikedList; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doLikeOnClick(claimId, likeStatus, claimName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('likes', 'like', {
      claim_id: claimId,
      liked: likeStatus,
      claim_name: claimName
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_ON_CLICK"],
        data: {
          likeStatus: likeStatus
        }
      });
    });
  };
}
function doDislikeOnClick(claimId, dislikeStatus, claimName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('likes', 'dislike', {
      claim_id: claimId,
      disliked: dislikeStatus,
      claim_name: claimName
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DISLIKE_ON_CLICK"],
        data: {
          dislikeStatus: dislikeStatus
        }
      });
    });
  };
}
function doLikeCount(claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('likes', 'count', {
      claim_id: claimId
    }, 'post').then(function (count) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_COUNT"],
        data: {
          likeCount: count.likes,
          dislikeCount: count.dislikes,
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus
        }
      });
    });
  };
}
function doLikeCheck(claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('likes', 'check', {
      claim_id: claimId
    }, 'post').then(function (count) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_CHECK"],
        data: {
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus
        }
      });
    });
  };
}
function doFetchLikedList() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('likes', 'list').then(function (list) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIKED_LIST"],
        data: {
          likedUris: list
        }
      });
    });
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchPlaylist", function() { return doFetchPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAddToPlaylist", function() { return doAddToPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveFromPlaylist", function() { return doRemoveFromPlaylist; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doFetchPlaylist(playlistName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('playlist', 'list', {
      name: playlistName
    }).then(function (res) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PLAYLIST"],
        data: {
          playlistUris: res,
          playlistName: playlistName
        }
      });
    });
  };
}
function doAddToPlaylist(claimId, claimName, playlistName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('playlist', 'add', {
      claim_id: claimId,
      claim_name: claimName,
      name: playlistName
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_PLAYLIST"],
        data: {
          playlistName: playlistName
        }
      });
    });
  };
}
function doRemoveFromPlaylist(claimId, playlistName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('playlist', 'remove', {
      claim_id: claimId,
      name: playlistName
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_PLAYLIST"],
        data: {
          playlistName: playlistName
        }
      });
    });
  };
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchCategoryList", function() { return doFetchCategoryList; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doFetchCategoryList() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('file', 'category_list').then(function (res) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CATEGORY_LIST"],
        data: {
          categoryListing: res
        }
      });
    });
  };
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAddToHistory", function() { return doAddToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchHistoryList", function() { return doFetchHistoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveFromHistory", function() { return doRemoveFromHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveAllFromHistory", function() { return doRemoveAllFromHistory; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doAddToHistory(claimId, claimName) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('history', 'add', {
      claim_id: claimId,
      claim_name: claimName
    }, 'post').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_HISTORY"]
      });
    });
  };
}
function doFetchHistoryList() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('history', 'list').then(function (list) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_HISTORY"],
        data: {
          historyList: list
        }
      });
    });
  };
}
function doRemoveFromHistory(claimId) {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('history', 'delete', {
      claim_id: claimId
    }, 'post').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_HISTORY"],
        data: data
      });
    });
  };
}
function doRemoveAllFromHistory() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('history', 'delete_all').then(function (data) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_ALL_HISTORY"],
        data: data
      });
    });
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAutocompleteSearchQuery", function() { return doAutocompleteSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSearchQuery", function() { return doSearchQuery; });
/* harmony import */ var lbryio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function doAutocompleteSearchQuery() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('autocomplete', '').then(function () {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_SEARCH_QUERY"],
        data: {
          autocompleteList: list
        }
      });
    });
  };
}
function doSearchQuery() {
  return function (dispatch) {
    lbryio__WEBPACK_IMPORTED_MODULE_0__["default"].call('search', '').then(function (list) {
      dispatch({
        type: constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SEARCH_QUERY_RESULT"],
        data: {
          searchQueryList: list
        }
      });
    });
  };
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var reducers = {};
var defaultState = {
  authenticating: false
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_FAILURE"]] = function (state) {
  return Object.assign({}, state, {
    authToken: null,
    authenticating: false
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    authenticating: true
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GENERATE_AUTH_TOKEN_SUCCESS"]] = function (state, action) {
  return Object.assign({}, state, {
    authToken: action.data.authToken,
    authenticating: false
  });
};

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewardsReducer", function() { return rewardsReducer; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var reducers = {};
var defaultState = {
  fetching: false,
  claimedRewardsById: {},
  // id => reward
  unclaimedRewards: [],
  claimPendingByType: {},
  claimErrorsByType: {},
  rewardedContentClaimIds: []
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARDS_STARTED] = function (state) {
  return Object.assign({}, state, {
    fetching: true
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARDS_COMPLETED] = function (state, action) {
  var userRewards = action.data.userRewards;
  var unclaimedRewards = [];
  var claimedRewards = {};
  userRewards.forEach(function (reward) {
    if (reward.transaction_id) {
      claimedRewards[reward.id] = reward;
    } else {
      unclaimedRewards.push(reward);
    }
  });
  return Object.assign({}, state, {
    claimedRewardsById: claimedRewards,
    unclaimedRewards: unclaimedRewards,
    fetching: false
  });
};

function setClaimRewardState(state, reward, isClaiming) {
  var errorMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var newClaimPendingByType = Object.assign({}, state.claimPendingByType);
  var newClaimErrorsByType = Object.assign({}, state.claimErrorsByType); // Currently, for multiple rewards of the same type, they will both show "claiming" when one is beacuse we track this by `reward_type`
  // To fix this we will need to use `claim_code` instead, and change all selectors to match

  if (isClaiming) {
    newClaimPendingByType[reward.reward_type] = isClaiming;
  } else {
    delete newClaimPendingByType[reward.reward_type];
  }

  if (errorMessage) {
    newClaimErrorsByType[reward.reward_type] = errorMessage;
  } else {
    delete newClaimErrorsByType[reward.reward_type];
  }

  return Object.assign({}, state, {
    claimPendingByType: newClaimPendingByType,
    claimErrorsByType: newClaimErrorsByType
  });
}

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_STARTED] = function (state, action) {
  var reward = action.data.reward;
  return setClaimRewardState(state, reward, true, '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_SUCCESS] = function (state, action) {
  var reward = action.data.reward;
  var unclaimedRewards = state.unclaimedRewards;
  var index = unclaimedRewards.findIndex(function (ur) {
    return ur.claim_code === reward.claim_code;
  });
  unclaimedRewards.splice(index, 1);
  var claimedRewardsById = state.claimedRewardsById;
  claimedRewardsById[reward.id] = reward;

  var newState = _objectSpread({}, state, {
    unclaimedRewards: _toConsumableArray(unclaimedRewards),
    claimedRewardsById: _objectSpread({}, claimedRewardsById)
  });

  return setClaimRewardState(newState, reward, false, '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_FAILURE] = function (state, action) {
  var _action$data = action.data,
      reward = _action$data.reward,
      error = _action$data.error;
  return setClaimRewardState(state, reward, false, error ? error.message : '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].CLAIM_REWARD_CLEAR_ERROR] = function (state, action) {
  var reward = action.data.reward;
  return setClaimRewardState(state, reward, state.claimPendingByType[reward.reward_type], '');
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_REWARD_CONTENT_COMPLETED] = function (state, action) {
  var claimIds = action.data.claimIds;
  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
  });
};

function rewardsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var reducers = {};
var defaultState = {
  authenticationIsPending: false,
  userIsPending: false,
  emailNewIsPending: false,
  emailNewErrorMessage: '',
  emailToVerify: '',
  inviteNewErrorMessage: '',
  inviteNewIsPending: false,
  inviteStatusIsPending: false,
  invitesRemaining: undefined,
  invitees: undefined,
  user: undefined,
  usersDefaultState: [],
  profileData: {},
  filterResultsVisible: false
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_STARTED] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: true,
    userIsPending: true,
    user: defaultState.user
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTHENTICATION_FAILURE] = function (state) {
  return Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: null
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_STARTED] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true,
    user: defaultState.user
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    userIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_FETCH_FAILURE] = function (state) {
  return Object.assign({}, state, {
    userIsPending: true,
    user: null
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_STARTED] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user: user
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: action.data.phone,
    phoneNewIsPending: false
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_RESET] = function (state) {
  return Object.assign({}, state, {
    phoneToVerify: null
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_REPORT_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    claim_id: action.data.claim_id,
    report_type: action.data.report_type
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    phoneNewIsPending: false,
    phoneNewErrorMessage: action.data.error,
    isLoggedIn: false
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: true,
    phoneVerifyErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_VERIFY_ID] = function (state, action) {
  return Object.assign({}, state, {
    isNewUser: action.data.user.isNew,
    // inputType: action.data.user.type,
    input: action.data.user.value
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    phoneToVerify: '',
    phoneVerifyIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_LOGOUT_SUCCESS] = function (state) {
  return Object.assign({}, state, {
    isLoggedIn: false,
    isNewUser: undefined,
    inputType: undefined
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_PHONE_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    phoneVerifyIsPending: false,
    phoneVerifyErrorMessage: action.data.error
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_STARTED] = function (state) {
  return Object.assign({}, state, {
    emailNewIsPending: true,
    emailNewErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_SUCCESS] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user: user
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_LOGIN] = function (state, action) {
  return Object.assign({}, state, {
    user: action.data,
    isLoggedIn: action.data.data.is_identity_verified
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_EXISTS] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    emailNewIsPending: false,
    emailNewErrorMessage: action.data.error
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    emailVerifyIsPending: true,
    emailVerifyErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_SUCCESS] = function (state, action) {
  var user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user: user
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    emailVerifyIsPending: false,
    emailVerifyErrorMessage: action.data.error
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_EMAIL_VERIFY_SET] = function (state, action) {
  return Object.assign({}, state, {
    emailToVerify: action.data.email
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_STARTED] = function (state) {
  return Object.assign({}, state, {
    identityVerifyIsPending: true,
    identityVerifyErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: '',
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_IDENTITY_VERIFY_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: action.data.error
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].FETCH_ACCESS_TOKEN_SUCCESS] = function (state, action) {
  var token = action.data.token;
  return Object.assign({}, state, {
    accessToken: token
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_STARTED] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: true
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_SUCCESS] = function (state, action) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: action.data.invitesRemaining,
    invitees: action.data.invitees,
    referralLink: action.data.referralLink
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_STARTED] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: true,
    inviteNewErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_SUCCESS] = function (state) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: ''
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_NEW_FAILURE] = function (state, action) {
  return Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: action.data.error.message
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].USER_INVITE_STATUS_FETCH_FAILURE] = function (state) {
  return Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: null,
    invitees: null
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PROFILE_SAVE"]] = function (state, action) {
  var profileData = action.data.profileData;
  return Object.assign({}, state, {
    profileData: profileData
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PROFILE_UPDATE"]] = function (state, action) {
  var profileData = action.data.profileData;
  return Object.assign({}, state, {
    profileData: profileData
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_CALLBACK"]] = function (state, action) {
  var notificationCallbackData = action.data.notificationCallbackData;
  return Object.assign({}, state, {
    notificationCallbackData: notificationCallbackData
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_REGISTER"]] = function (state, action) {
  var notificationData = action.data.notificationData;
  return Object.assign({}, state, {
    notificationData: notificationData
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["USER_PROFILE_FETCH"]] = function (state, action) {
  var profileData = action.data.profileData;
  return Object.assign({}, state, {
    profileData: profileData
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SEARCH_QUERY_FILTERS"]] = function (state, action) {
  var _action$data = action.data,
      filteredSearchList = _action$data.filteredSearchList,
      filterResultsVisible = _action$data.filterResultsVisible;
  return Object.assign({}, state, {
    filteredSearchList: filteredSearchList,
    filterResultsVisible: filterResultsVisible
  });
};

reducers[_constants_action_types__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FILTER_VISIBLE"]] = function (state, action) {
  var filterResultsVisible = action.data.filterResultsVisible;
  return Object.assign({}, state, {
    filterResultsVisible: filterResultsVisible
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SAVE_USER_HELP] = function (state, action) {
  return Object.assign({}, state, {
    response: action.data.success
  });
};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].SAVE_USER_FEEDBACK] = function (state, action) {
  return Object.assign({}, state, {
    response: action.data.success
  });
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "costInfoReducer", function() { return costInfoReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetching: {},
  byUri: {}
};
var costInfoReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COST_INFO_STARTED"], function (state, action) {
  var uri = action.data.uri;
  var newFetching = Object.assign({}, state.fetching);
  newFetching[uri] = true;
  return _objectSpread({}, state, {
    fetching: newFetching
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_COST_INFO_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      uri = _action$data.uri,
      costInfo = _action$data.costInfo;
  var newByUri = Object.assign({}, state.byUri);
  var newFetching = Object.assign({}, state.fetching);
  newByUri[uri] = costInfo;
  delete newFetching[uri];
  return _objectSpread({}, state, {
    byUri: newByUri,
    fetching: newFetching
  });
}), _handleActions), defaultState);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklistReducer", function() { return blacklistReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingBlackListedOutpoints: false,
  fetchingBlackListedOutpointsSucceed: undefined,
  blackListedOutpoints: undefined
};
var blacklistReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      outpoints = _action$data.outpoints,
      success = _action$data.success;
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    blackListedOutpoints: outpoints
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_BLACK_LISTED_CONTENT_FAILED"], function (state, action) {
  var _action$data2 = action.data,
      error = _action$data2.error,
      success = _action$data2.success;
  return _objectSpread({}, state, {
    fetchingBlackListedOutpoints: false,
    fetchingBlackListedOutpointsSucceed: success,
    fetchingBlackListedOutpointsError: error
  });
}), _handleActions), defaultState);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageReducer", function() { return homepageReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined
};
var homepageReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FEATURED_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingFeaturedContent: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_FEATURED_CONTENT_COMPLETED"], function (state, action) {
  var _action$data = action.data,
      uris = _action$data.uris,
      success = _action$data.success;
  return _objectSpread({}, state, {
    fetchingFeaturedContent: false,
    fetchingFeaturedContentFailed: !success,
    featuredUris: uris
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRENDING_CONTENT_STARTED"], function (state) {
  return _objectSpread({}, state, {
    fetchingTrendingContent: true
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CONTENT_CATEGORY"], function (state, action) {
  var uris = action.data.uris;
  return _objectSpread({}, state, {
    fetchingContentCategory: uris
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECENT_LIST"], function (state, action) {
  var data = action.data.data;
  return _objectSpread({}, state, {
    fetchingRecentList: data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NOT_INTERESTED_LIST"], function (state, action) {
  var data = action.data.data;
  return _objectSpread({}, state, {
    fetchingNotInterestedList: data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["NOT_INTERESTED_CONTENT"], function (state, action) {
  var data = action.data.claim_id.data;
  return _objectSpread({}, state, {
    notInterestedContent: data
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TRENDING_CONTENT_COMPLETED"], function (state, action) {
  var _action$data2 = action.data,
      uris = _action$data2.uris,
      success = _action$data2.success;
  return _objectSpread({}, state, {
    fetchingTrendingContent: false,
    fetchingTrendingContentFailed: !success,
    trendingUris: uris
  });
}), _handleActions), defaultState);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statsReducer", function() { return statsReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
  viewCount: 0
};
var statsReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["VIEW_COUNTER"], function (state, action) {
  var viewCount = action.data.viewCount;
  return _objectSpread({}, state, {
    viewCount: viewCount
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["REG_VIEW"], function (state, action) {
  var viewCount = action.data.viewCount;
  return _objectSpread({}, state, {
    viewCount: viewCount
  });
}), _handleActions), defaultState);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncReducer", function() { return syncReducer; });
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var reducers = {};
var defaultState = {
  hasSyncedWallet: false,
  syncHash: null,
  setSyncErrorMessage: null,
  retrievingSync: false,
  settingSync: false
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    retrievingSync: true
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["GET_SYNC_COMPLETED"]] = function (state, action) {
  return Object.assign({}, state, {
    syncHash: action.data.syncHash,
    hasSyncedWallet: action.data.hasSyncedWallet,
    retrievingSync: false
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_STARTED"]] = function (state) {
  return Object.assign({}, state, {
    settingSync: true,
    setSyncErrorMessage: null
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_FAILED"]] = function (state, action) {
  return Object.assign({}, state, {
    settingSync: true,
    setSyncErrorMessage: action.data.error
  });
};

reducers[constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SYNC_COMPLETED"]] = function (state, action) {
  return Object.assign({}, state, {
    settingSync: false,
    setSyncErrorMessage: null,
    hasSyncedWallet: true,
    // sync was successful, so the user has a synced wallet at this point
    syncHash: action.data.syncHash
  });
};

function syncReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likesReducer", function() { return likesReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  likeStatus: false,
  likeCount: 0,
  dislikeStatus: false,
  dislikeCount: 0
};
var likesReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_ON_CLICK"], function (state, action) {
  var likeStatus = action.data.likeStatus;
  return _objectSpread({}, state, {
    likeCount: likeStatus ? state.likeCount + 1 : state.likeCount - 1,
    dislikeCount: state.dislikeStatus ? state.dislikeCount - 1 : state.dislikeCount,
    likeStatus: likeStatus,
    dislikeStatus: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DISLIKE_ON_CLICK"], function (state, action) {
  var dislikeStatus = action.data.dislikeStatus;
  return _objectSpread({}, state, {
    likeCount: state.likeStatus ? state.likeCount - 1 : state.likeCount,
    dislikeCount: dislikeStatus ? state.dislikeCount + 1 : state.dislikeCount - 1,
    dislikeStatus: dislikeStatus,
    likeStatus: false
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_COUNT"], function (state, action) {
  var _action$data = action.data,
      likeCount = _action$data.likeCount,
      dislikeCount = _action$data.dislikeCount;
  return _objectSpread({}, state, {
    likeCount: likeCount,
    dislikeCount: dislikeCount
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["LIKE_CHECK"], function (state, action) {
  var _action$data2 = action.data,
      likeStatus = _action$data2.likeStatus,
      dislikeStatus = _action$data2.dislikeStatus;
  return _objectSpread({}, state, {
    likeStatus: likeStatus,
    dislikeStatus: dislikeStatus
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_LIKED_LIST"], function (state, action) {
  var likedUris = action.data.likedUris;
  return _objectSpread({}, state, {
    likedUris: likedUris
  });
}), _handleActions), defaultState);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlistReducer", function() { return playlistReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  playlistUris: {},
  playlistName: 'Watch Later'
};
var playlistReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PLAYLIST"], function (state, action) {
  var _action$data = action.data,
      playlistUris = _action$data.playlistUris,
      playlistName = _action$data.playlistName;
  return _objectSpread({}, state, {
    playlistUris: playlistUris,
    playlistName: playlistName
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_PLAYLIST"], function (state, action) {
  var playlistName = action.data.playlistName;
  return _objectSpread({}, state, {
    playlistName: playlistName
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_PLAYLIST"], function (state, action) {
  var playlistName = action.data.playlistName;
  return _objectSpread({}, state, {
    playlistName: playlistName
  });
}), _handleActions), defaultState);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportReducer", function() { return reportReducer; });
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_0__);

var reducers = {};

reducers[lbry_redux__WEBPACK_IMPORTED_MODULE_0__["USER_REPORT_TYPE"]] = function (state, action) {
  return Object.assign({}, state, {
    reportType: action.data.reportType,
    claimId: action.data.claimId
  });
};

function reportReducer(state, action) {
  var handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryReducer", function() { return categoryReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  categoryListing: {}
};
var categoryReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])(_defineProperty({}, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_CATEGORY_LIST"], function (state, action) {
  var categoryListing = action.data.categoryListing;
  return _objectSpread({}, state, {
    categoryListing: categoryListing
  });
}), defaultState);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyReducer", function() { return historyReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  historyList: {}
};
var historyReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_HISTORY"], function (state, action) {
  return _objectSpread({}, state);
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_HISTORY"], function (state, action) {
  var historyList = action.data.historyList;
  return _objectSpread({}, state, {
    historyList: historyList
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_HISTORY"], function (state, action) {
  var claimId = action.data.claimId;
  return _objectSpread({}, state, {
    claimId: claimId
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["DELETE_ALL_HISTORY"], function (state, action) {
  var data = action.data.data;
  return _objectSpread({}, state, {
    data: data
  });
}), _handleActions), defaultState);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony import */ var util_redux_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var constants_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  autocompleteList: {},
  searchQueryList: {}
};
var searchReducer = Object(util_redux_utils__WEBPACK_IMPORTED_MODULE_0__["handleActions"])((_handleActions = {}, _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_SEARCH_QUERY"], function (state, action) {
  var autocompleteList = action.data.autocompleteList;
  return _objectSpread({}, state, {
    autocompleteList: autocompleteList
  });
}), _defineProperty(_handleActions, constants_action_types__WEBPACK_IMPORTED_MODULE_1__["AUTOCOMPLETE_SEARCH_QUERY"], function (state, action) {
  var searchQueryList = action.data.searchQueryList;
  return _objectSpread({}, state, {
    searchQueryList: searchQueryList
  });
}), _handleActions), defaultState);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthToken", function() { return selectAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticating", function() { return selectIsAuthenticating; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.auth || {};
};

var selectAuthToken = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authToken;
});
var selectIsAuthenticating = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.authenticating;
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeSelector", function() { return likeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislikeSelector", function() { return dislikeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeCountSelector", function() { return likeCountSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislikeCountSelector", function() { return dislikeCountSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLikedList", function() { return selectLikedList; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.likes || {};
};
var likeSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.likeStatus;
});
var dislikeSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.dislikeStatus;
});
var likeCountSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.likeCount;
});
var dislikeCountSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.dislikeCount;
});
var selectLikedList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.likedUris;
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCostInfoByUri", function() { return selectAllCostInfoByUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCostInfoForUri", function() { return makeSelectCostInfoForUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingCostInfo", function() { return selectFetchingCostInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectFetchingCostInfoForUri", function() { return makeSelectFetchingCostInfoForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.costInfo || {};
};
var selectAllCostInfoByUri = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.byUri || {};
});
var makeSelectCostInfoForUri = function makeSelectCostInfoForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllCostInfoByUri, function (costInfos) {
    return costInfos && costInfos[uri];
  });
};
var selectFetchingCostInfo = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetching || {};
});
var makeSelectFetchingCostInfoForUri = function makeSelectFetchingCostInfoForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFetchingCostInfo, function (fetchingByUri) {
    return fetchingByUri && fetchingByUri[uri];
  });
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlackListedOutpoints", function() { return selectBlackListedOutpoints; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.blacklist || {};
};
var selectBlackListedOutpoints = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.blackListedOutpoints;
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeaturedUris", function() { return selectFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingFeaturedUris", function() { return selectFetchingFeaturedUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTrendingUris", function() { return selectTrendingUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFetchingTrendingUris", function() { return selectFetchingTrendingUris; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectContentCategory", function() { return selectContentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRecentList", function() { return selectRecentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNotInterestedList", function() { return selectNotInterestedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNotInterested", function() { return selectNotInterested; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.homepage || {};
};

var selectFeaturedUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.featuredUris;
});
var selectFetchingFeaturedUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingFeaturedContent;
});
var selectTrendingUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.trendingUris;
});
var selectFetchingTrendingUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingTrendingContent;
});
var selectContentCategory = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingContentCategory;
});
var selectRecentList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingRecentList;
});
var selectNotInterestedList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.fetchingNotInterestedList;
});
var selectNotInterested = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.notInterestedContent;
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectViewCount", function() { return selectViewCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectViewCountForUri", function() { return makeSelectViewCountForUri; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lbry_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lbry_redux__WEBPACK_IMPORTED_MODULE_1__);



var selectState = function selectState(state) {
  return state.stats || {};
};

var selectViewCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.viewCount;
});
var makeSelectViewCountForUri = function makeSelectViewCountForUri(uri) {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(Object(lbry_redux__WEBPACK_IMPORTED_MODULE_1__["makeSelectClaimForUri"])(uri), selectViewCount, function (claim, viewCountById) {
    return viewCountById[claim.claim_id] || 0;
  });
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlaylistName", function() { return selectPlaylistName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlaylistUris", function() { return selectPlaylistUris; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.playlist || {};
};
var selectPlaylistName = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.playlistName;
});
var selectPlaylistUris = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.playlistUris;
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectState", function() { return selectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoryListing", function() { return selectCategoryListing; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var selectState = function selectState(state) {
  return state.category || {};
};
var selectCategoryListing = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.categoryListing;
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHistoryList", function() { return selectHistoryList; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.history || {};
};

var selectHistoryList = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.historyList;
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHasSyncedWallet", function() { return selectHasSyncedWallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSyncHash", function() { return selectSyncHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSetSyncErrorMessage", function() { return selectSetSyncErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsRetrievingSync", function() { return selectIsRetrievingSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsSettingSync", function() { return selectIsSettingSync; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


var selectState = function selectState(state) {
  return state.sync || {};
};

var selectHasSyncedWallet = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.hasSyncedWallet;
});
var selectSyncHash = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.syncHash;
});
var selectSetSyncErrorMessage = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.setSyncErrorMessage;
});
var selectIsRetrievingSync = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.retrievingSync;
});
var selectIsSettingSync = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, function (state) {
  return state.settingSync;
});

/***/ })
/******/ ]);
});