// ==UserScript==
// @name          Untappd Dark Theme (2021 Update)
// @version       1.0.0
// @namespace     https://github.com/chrisjp
// @description	  A dark theme for Untappd
// @license       MIT
// @author        Chris Phillips (LazyPyro)
// @updateURL     https://raw.githubusercontent.com/chrisjp/untappd-dark-theme/master/untappd-dark-mode-theme.user.js
// @downloadURL   https://raw.githubusercontent.com/chrisjp/untappd-dark-theme/master/untappd-dark-mode-theme.user.js
// @homepageURL   https://github.com/chrisjp/untappd-dark-theme
// @supportURL    https://github.com/chrisjp/untappd-dark-theme/issues
// @include       https://untappd.com/*
// @exclude       https://untappd.com/supporter*
// @exclude       https://untappd.com/breweries*
// @exclude       https://untappd.com/blog*
// @exclude       https://untappd.com/careers*
// @run-at        document-start
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle(`
/** body */

body {
    background-color: #272727;
    color: #aaa;
}


/** main headers */

h1,
h2,
h3,
.stats h2,
.stats h3,
.stats .top_list h3 {
    color: white;
}

header {
    background-color: #151515;
}

header .inner .logo img {
    content: url(https://theme.zdassets.com/theme_assets/9214421/045a22aeaee3061a3536d4238e9e9cd674551909.png);
}

header .inner .logo,
header .inner .logo img {
    width: 150px;
    height: 46px;
}


/** search inputs */

.search_box input,
.menu-search-bar .search-form .search-field input,
.search-distance .search-container .search-field input {
    background-color: #222;
    color: #aaa;
}

.menu-search-bar .search-form .search-field input,
.search-distance .search-container .search-field input {
    background-color: #222;
    color: #aaa;
}

.menu-search-bar .search-form .search-field {
    background-color: #000;
}

.menu-filter-options,
.distinct-list .distinct-list-content .filters {
    background-color: #333;
}

.search_box .aa-dropdown-menu {
    background-color: #222;
}

.search_box .aa-dropdown-menu .ac_section {
    background-color: #111;
    color: #eee;
}

.search_box .aa-dropdown-menu .ac_item:hover {
    background-color: #333;
}

.search_box .aa-dropdown-menu .ac_item .info .title {
    color: white;
}

.search_box .aa-dropdown-menu .ac_item .info .sub_title {
    color: #aaa;
}


/** links */

a,
header #nav_site ul li a {
    color: #ffc000;
}

.beer-page .main .b_info .top .basic .name .subsidiary a,
.brewery-page .main .b_info .top .basic .name .subsidiary a,
.venue-page .main .b_info .top .basic .name .subsidiary a {
    color: #ffc000;
}


/** text (descriptions etc) */

.beer-page .main .b_info .top .basic .name .brewery,
.beer-page .main .b_info .top .basic .name .categories,
.brewery-page .main .b_info .top .basic .name .brewery,
.brewery-page .main .b_info .top .basic .name .categories,
.venue-page .main .b_info .top .basic .name .brewery,
.venue-page .main .b_info .top .basic .name .categories,
.beer-page .main .b_info .top .basic .name .style,
.beer-list .beer-item .beer-details .desc,
.beer-list .beer-item .beer-details .style {
    color: #aaa;
}


/** check in beer title */

.activity #main-stream .item .checkin .top .text {
    color: white;
}


/** serving type */

.activity #main-stream .item .checkin .top .checkin-comment .rating-serving .serving span {
    color: white;
}


/* ---checkin comment text-- */

.activity #main-stream .item .checkin .top .checkin-comment .comment-text {
    color: white;
}


/** checkin comment box */

.activity #main-stream .item .checkin .top .checkin-comment {
    background: #1d1d1d;
    border-color: #444;
}

.activity #main-stream .item .checkin .top .checkin-comment::before {
    border-color: transparent transparent #444;
}

.activity #main-stream .item .checkin .top .checkin-comment::after {
    border-color: transparent transparent #444;
}


/** checkin metadata */

.activity #main-stream .item .checkin .top .checkin-comment .badge span,
.activity #main-stream .item .checkin .top .checkin-comment .purchased,
#gallery-modal .bottom .beer-details .beer span a,
.activity #main-stream .item .checkin .bottom a.time,
.activity #main-stream .item .checkin .feedback .comments .comment .text .editing .actions .cancel,
.activity #main-stream .item .checkin .feedback .comments .prev_comments a span {
    color: #aaa;
}

.activity #main-stream .item .checkin .top .checkin-comment .badge img {
    border-radius: 15px;
}


/** checkin, heading, search item, stats border color  */

.activity #main-stream .item,
.activity h3,
.search_box .aa-dropdown-menu .see-more-results,
.beer-list h3,
.likers,
.top-header,
.distinct-list .distinct-list-content .distinct-list-list .venue-item,
.user-lists .list-of-lists .single-list {
    border-color: #444;
}


/** beer/brewery stats and details */

.beer-page .main .details .num,
.brewery-page .main .details .num,
.venue-page .main .details .num,
.beer-page .main .details p,
.brewery-page .main .details p,
.venue-page .main .details p,
.beer-page .main .b_info .top .stats p,
.brewery-page .main .b_info .top .stats p,
.venue-page .main .b_info .top .stats p,
.brewery-page .main .b_info .top .basic .name .style,
.beer-list .beer-item .details .details-item {
    color: #aaa;
}


/** beer/brewery descriptions */

.beer-page .main .b_info .bottom .desc,
.brewery-page .main .b_info .bottom .desc,
.venue-page .main .b_info .bottom .desc {
    color: #aaa;
}


/** oop beer */

.beer-page .main .b_info .oop,
.brewery-page .main .b_info .oop,
.venue-page .main .b_info .oop {
    background-color: #333;
    color: #eee;
}


/** user extra adding comments */

.activity #main-stream .item .checkin .feedback .comments .input textarea {
    color: #fff;
    background-color: #272727;
}


/** tagged friends */

.activity #main-stream .item .checkin .top .checkin-comment .tagged-friends {
    color: #fff;
}

.activity #main-stream .item .checkin .feedback .comments .input {
    background-color: #272727;
}


/** user added extra comments */

.activity #main-stream .item .checkin .feedback .comments {
    background-color: #272727;
}


/** previous comments */

.activity #main-stream .item .checkin .feedback .comments .prev_comments a {
    background-color: #333;
}

.activity #main-stream .item .checkin .feedback .comments .comment .text {
    color: #fff;
}


/** filter options links */

.activity .filters {
    color: #cc6600;
}


/** info box / content box */

.cont .box .content {
    background-color: #212121;
}


/** wishlist */

.modal.choose-list ul {
    background-color: #131313;
}


/** sidebar */

.cont .sidebar .box .like p span,
.cont .sidebar .box .like p,
.cont .sidebar .box .item .text span.brewery,
.cont .sidebar .box .item .text span.location,
.cont .sidebar .box .list-item .details .meta {
    color: #aaa;
}


.cont .sidebar .user_mini .stats a {
    color: #fff;
    background-color: #2b2b2b;
}

.cont .sidebar .user_mini .sb_user .info .location,
.cont .sidebar .user_mini .sb_user .info .username {
    color: #888;
}

.cont .sidebar .box .drinkers a span img,
.cont .sidebar .box .likers a span img {
    border-radius: 30px;
}

.cont .sidebar .user_mini .stats a:hover {
    background-color: #222;
}

.cont .sidebar .box h3,
.cont .sidebar .box .more {
    border-color: #444;
}

.sb-events h3 p {
    color: #888;
}


/** toast and comment buttons */

.button.grey {
    background-color: #272727;
}


/** toast count display */

.activity #main-stream .item .checkin .cheers {
    background-color: #272727;
}


/** toast count text */

.activity #main-stream .item .checkin .cheers .count {
    color: #aaa;
}


/** friends  */

.top-header {
    background-color: #212121;
}

.friends-list .friend-item .user .info h1 a {
    color: #fff;
}

.friends-list .top,
.friends-list .friend-item {
    color: #fff;
    border-color: #444;
}

.friends-list .friend-item .user .info .location,
.friends-list .friend-item .user .info .username,
.friends-list .friend-item .common .title,
.friends-list .find .find-inner .search-social p,
.friends-list .friend-item .bio {
    color: #888;
}


/** beer history */

.distinct-list .distinct-list-content .distinct-list-list .beer-item .beer-details .brewery a {
    color: #c60;
}

.distinct-list .distinct-list-content .distinct-list-list .beer-item .beer-details .style,
.distinct-list .distinct-list-content .distinct-list-list .beer-item .ratings p,
.distinct-list .distinct-list-content .distinct-list-list .beer-item .details p {
    color: #888;
}

/** stats */

.stats .top_list ul li div span {
    color: #888;
}

/** badges */

.badge-list .main .box .content .header {
    background-color: #212121;
}

.badge-list .main .box .content .badges .item .name {
    color: #aaa;
}

.badge-list .main .box .content .badges .item img {
    border-radius: 60px;
}

.badge-list .main .box .content .filters p.active,
.badge-list .main .box .content .filters p:hover {
    color: white;
    background-color: #444;
}


/** search filters */

.filter a {
    color: white;
    background-color: #333;
}

.filter a.active,
.filter a:hover {
    color: white;
    background-color: #404040;
}

.menu-filter-options .sort-toggles ul li span {
    background-color: #222;
}

/** search results */

.search-page .main .box .search {
    background-color: transparent;
}

.search-page .main .box .search form input[type=text] {
    background-color: #404040;
    background: url(https://untappd.akamaized.net/assets/v3/images/header_search_icon.png) 2% 50% / 18px 18px no-repeat scroll padding-box border-box rgb(34, 34, 34);
    color: #ddd;
}

.search-page .main .box .total,
.search-page .main .box .results-none {
    color: white;
}

.search-page .beer-list .beer-item {
    border-color: #444;
}

.search-page .beer-list .beer-item .details.beer p,
.search-page .beer-list .beer-item .details.brewery p,
.search-page .beer-list .beer-item .venue-details .style {
    color: #aaa;
}

.search-page .main .box .results-add-beer {
    background-color: #000;
    border: 1px solid #8a4500;
}

.search-page .main .box .filter a {
    color: white;
    background-color: #333;
}

.search-page .main .box .filter a.active,
.search-page .main .box .filter a:hover {
    color: white;
    background-color: #444;
}


/** venues */

.distinct-list .distinct-list-content .distinct-list-list .venue-item .details p {
    color: #aaa;
}

.distinct-list .distinct-list-content .distinct-list-list .venue-item .venue-details .address,
.modal.checkin .inner form .checkbottom .location .loc-main.loading .loc-add,
.venue-page .venue-body .venue-activity ul li .details .time a {
    color: #888;
}


/** lists */

.user-lists .item-info h3 {
    color: #ddd;
}

.user-lists .item-info h3 a {
    color: #c60;
}

.user-lists .item-info h4 {
    color: #bbb;
}

.user-lists .item-info .rating-container span.rating-avg,
.user-lists .single-list .list-item .item-info .item-info-container .date-added {
    color: #888;
}

.modal.choose-list ul li {
    border-color: #444;
}


/** modals */

.modal .inner {
    background-color: #333
}

.modal.create-list .content p input,
.modal.create-list .content p textarea,
.modal.create-list .content p select {
    background-color: #404040;
    color: #ddd;
}


/** account */

.account-settings .settings-section.check-list ul li span.label {
    color: #aaa;
}

.account-settings .input p,
.account-settings .settings-section ul.social-connect li .connected {
    background-color: #1b1b1b;
}

.account-settings .input input,
.account-settings .input select,
.account-settings .input textarea {
    background-color: #404040;
    color: #ddd;
}


/** merge history */

.import-content .header {
    background-color: #1b1b1b !important;
    color: white !important;
    border-color: #444 !important;
}

#container div.content {
    background-color: #222;
}

.import-task-items-table tbody tr:nth-child(odd) {
    background-color: #393939 !important;
}

.import-task-items-table tbody tr:nth-child(even) {
    background-color: #303030 !important;
}

.import-task-items-table .brewery-name {
    color: white !important; /* doesn't work as Untappd is already overriding this inline for some reason */
}

/** top rated */

.ratings-page h3.title {
    background-color: transparent !important;
}

.ratings-page .filters {
    background-color: #333 !important;
}

`);