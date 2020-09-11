<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateVersion='1.0.0' expr:class='data:blog.languageDirection' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' name='viewport'/>
    <meta content='4ED7E0B53364BAC4BB4DCD9CAE0AB703' name='msvalidate.01'/>
    <meta content='dd09439674f86a9d' name='yandex-verification'/>
    <title><data:view.title.escaped/> | World of Technology</title>
    
    <meta content='Tech Being | World of Technology' name='title'/>
    <meta content='Karan Kankaria' name='author'/>
    <meta content='Tech Being Provides Content Related to Blogging, Website, SEO, Technology, Gadget Review, Online Earning Tips, Android, Google Adsense &amp;amp; Much More' name='description'/>
    <meta content='blogger Tips,Blogger Tricks,Blogger Templates,Earning,Ad Network Review,WordPress,SEO,Make Money,Adsense Tips' name='keywords'/>
    <meta content='global' name='distribution'/>
    <meta content='all' name='robots'/>
    <include expiration='7d' path='*.css'/>
    <include expiration='7d' path='*.js'/>
    <include expiration='3d' path='*.gif'/>
    <include expiration='3d' path='*.jpeg'/>
    <include expiration='3d' path='*.jpg'/>
    <include expiration='3d' path='*.png'/>
    <link href='//1.bp.blogspot.com' rel='dns-prefetch'/>
    <link href='//2.bp.blogspot.com' rel='dns-prefetch'/>
    <link href='//3.bp.blogspot.com' rel='dns-prefetch'/>
    <link href='//4.bp.blogspot.com' rel='dns-prefetch'/>
    <link href='//www.blogger.com' rel='dns-prefetch'/>
    <link href='//dnjs.cloudflare.com' rel='dns-prefetch'/>
    <link href='//fonts.gstatic.com' rel='dns-prefetch'/>
    <link href='//pagead2.googlesyndication.com' rel='dns-prefetch'/>
    <link href='//www.googletagmanager.com' rel='dns-prefetch'/>
    <link href='//www.google-analytics.com' rel='dns-prefetch'/>
    <link href='//connect.facebook.net' rel='dns-prefetch'/>
    <link href='//c.disquscdn.com' rel='dns-prefetch'/>
    <link href='//disqus.com' rel='dns-prefetch'/>
    <b:include name='theme-head'/>
    <!-- Font Awesome Free 5.8.2 -->
    <link defer='true' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css' rel='stylesheet'/>
<!-- Template Style CSS -->
<b:skin version='1.0.0'><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:        Tech Being
Version:     1.0.0 - Pro Version
Author:      *********
Author Url:  *********
----------------------------------------------- */

/*
<!-- Variable definitions -->
<Variable name="keycolor" description="Main Color" type="color" default="$(main.color)" value="#ff3d00"/>

<Group description="Layout Options" selector="body">
  <Variable name="boxed" description="Boxed Version" type="length" default="0px" min="0px" max="1px" value="0px"/>
  <Variable name="sidebar" description="Left Sidebar" type="length" default="0px" min="0px" max="1px" value="0px"/>
  <Variable name="fixedmenu" description="Fixed Menu" type="length" default="1px" min="0px" max="1px" value="1px"/>
  <Variable name="fixedsidebar" description="Fixed Sidebar" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>

<Group description="Theme Widths" selector="body">
  <Variable name="row.width" description="Container Width" type="length" default="1078px" min="970px" max="1094px" value="1078px"/>
  <Variable name="sidebar.width" description="Sidebar Width" type="length" default="320px" min="300px" max="336px" value="320px"/>
</Group>

<Group description="Theme Fonts" selector="body">
<Variable name="main.font" description="Site Font" type="font" family="'Poppins',sans-serif" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
<Variable name="title.font" description="Title Font" type="font" family="'Poppins',sans-serif" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
<Variable name="meta.font" description="Meta Font" type="font" family="'Poppins',sans-serif" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
<Variable name="text.font" description="Text Font" type="font" family="'Poppins',sans-serif" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
</Group>

<Group description="Theme Colors" selector="body">
  <Variable name="main.color" description="Theme Color" type="color" default="#ff3d00" value="#ff3d00"/>
  <Variable name="main.dark.color" description="Theme Dark Color" type="color" default="#171c24" value="#171c24"/>
  <Variable name="title.color" description="Title Color" type="color" default="#171c24" value="#171c24"/>
  <Variable name="title.hover.color" description="Title Hover Color" type="color" default="$(main.color)" value="#ff3d00"/>
  <Variable name="meta.color" description="Meta Color" type="color" default="#aaaaaa" value="#aaaaaa"/>
  <Variable name="tag.bg" description="Tag Background" type="color" default="$(main.color)" value="#ff3d00"/>
  <Variable name="tag.color" description="Tag Color" type="color" default="#ffffff" value="#ffffff"/>
</Group>

<Group description="Theme Body" selector="body">
  <Variable name="body.background.color" description="Body Background - Boxed" type="color" default="#f7f7f7"  value="#f7f7f7"/>
  <Variable name="body.background" description="Background" type="background" color="$(body.background.color)" default="$(color) url() repeat scroll top left" value="$(color) url() repeat scroll top left"/>
  <Variable name="outer.bg" description="Outer Wrapper Background" type="color" default="#f7f7f7"  value="#f7f7f7"/>
  <Variable name="body.text.color" description="Body Text Color" type="color" default="#656565"  value="#656565"/>
  <Variable name="body.link.color" description="Colored Links" type="color" default="$(main.color)"  value="#ff3d00"/>
</Group>

<Group description="Main Header" selector="div.headerify">
  <Variable name="navbar.bg" description="Header Background" type="color" default="$(main.dark.color)" value="#171c24"/>
  <Variable name="navbar.color" description="Header Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="navbar.hover.color" description="Header Hover Color" type="color" default="$(main.color)" value="#ff3d00"/>
  <Variable name="navbar.border" description="Header Border Color" type="color" default="$(main.dark.color)" value="#171c24"/>
</Group>

<Group description="Sub Menu" selector="div.headerify">
  <Variable name="submenu.bg" description="SubMenu Background" type="color" default="#1e232b" value="#1e232b"/>
  <Variable name="submenu.color" description="SubMenu Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="submenu.hover.color" description="SubMenu Hover Color" type="color" default="$(main.color)" value="#ff3d00"/>
</Group>

<Group description="Mega Menu" selector="div.headerify">
  <Variable name="megamenu.bg" description="MegaMenu Background" type="color" default="$(submenu.bg)" value="#1e232b"/>
  <Variable name="megamenu.post.title.color" description="MegaMenu Post Title Color" type="color" default="$(submenu.color)" value="#ffffff"/>
  <Variable name="megamenu.post.title.hover" description="MegaMenu Post Title Hover Color" type="color" default="$(submenu.hover.color)" value="#ff3d00"/>
</Group>

<Group description="Theme Widgets">
  <Variable name="widget.bg" description="Widget Background" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="widget.border.color" description="Widget Border Color" type="color" default="#e6e6e6" value="#e6e6e6"/>
  <Variable name="wtitle.color" description="Widget Title Color" type="color" default="$(title.color)" value="#171c24"/>
  <Variable name="wtitle.border.color" description="Widget Title Border Color" type="color" default="#ebebeb" value="#ebebeb"/>
  <Variable name="wtitle.dash.color" description="Widget Title Dash Color" type="color" default="$(main.color)" value="#ff3d00"/>
  <Variable name="showborder" description="Show Border" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>

<Group description="Post Styles" select="#main-wrapper">
  <Variable name="post.title.color" description="Post Title Color" type="color" default="$(title.color)" value="#171c24"/>
  <Variable name="post.title.hover.color" description="Post Title Hover Color" type="color" default="$(title.hover.color)" value="#ff3d00"/>
  <Variable name="post.text.color" description="Post Text Color" type="color" default="$(body.text.color)" value="#656565"/>
  <Variable name="itempost.title.size" description="Post Title Font Size" type="length" default="35px" min="20px" max="50px" value="35px"/>
  <Variable name="itempost.content.size" description="Post Text Font Size" type="length" default="15px" min="13px" max="20px" value="15px"/>
</Group>

<Group description="Post Options" select="#main-wrapper">
  <Variable name="breadcrumb" description="Post Breadcrumbs" type="length" default="1px" min="0px" max="1px" value="1px"/>
  <Variable name="sharebuttons" description="Share Buttons Before Post Content" type="length" default="1px" min="0px" max="1px" value="1px"/>
  <Variable name="postnav" description="Post Navigation" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>

<Group description="Theme Buttons">
  <Variable name="button.bg" description="Button Background" type="color" default="$(main.color)" value="#ff3d00"/>
  <Variable name="button.color" description="Button Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="button.hover.bg" description="Button Hover Background" type="color" default="#e53700" value="#e53700"/>
  <Variable name="button.hover.color" description="Button Hover Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="darkbutton.bg" description="Dark Button Background" type="color" default="$(main.dark.color)" value="#171c24"/>
  <Variable name="darkbutton.color" description="Dark Button Color" type="color" default="#ffffff" value="#ffffff"/>
</Group>

<Group description="Theme Footer" selector="#footer-wrapper">
  <Variable name="footer.bg" description="Footer Background" type="color" default="$(main.dark.color)" value="#171c24"/>
  <Variable name="footer.widget.title.color" description="Widget Title Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="footer.color" description="Footer Color" type="color" default="#f2f2f2" value="#f2f2f2"/>
  <Variable name="footer.text.color" description="Footer Text Color" type="color" default="#aaaaaa" value="#aaaaaa"/>
  <Variable name="footer.link.color" description="Footer Link Color" type="color" default="$(body.link.color)" value="#ff3d00"/>
</Group>

<Group description="Footer Bar" selector="#footerbar">
  <Variable name="footerbar.bg" description="Footer Bar Background" type="color" default="#12161d" value="#12161d"/>
  <Variable name="footerbar.color" description="Footer Bar  Color" type="color" default="#ffffff" value="#ffffff"/>
  <Variable name="footerbar.hover.color" description="Footer Bar Hover Color" type="color" default="$(main.color)" value="#ff3d00"/>
</Group>

<!-- Site Font -->
<Variable name="mainfont.medium" description="Main Font Medium" hideEditor="true" type="font" default="normal 500 14px $(main.font.family)" value="normal 500 14px $(family)"/>
<Variable name="mainfont.semibold" description="Main Font SemiBold" hideEditor="true" type="font" default="normal 600 14px $(main.font.family)" value="normal 600 14px $(family)"/>
<Variable name="mainfont.bold" description="Main Font Bold" hideEditor="true" type="font" default="normal 700 14px $(main.font.family)" value="normal 700 14px $(family)"/>
<Variable name="mainfont.italic" description="Main Font Italic" hideEditor="true" type="font" default="italic 400 14px $(main.font.family)" value="italic 400 14px $(family)"/>
<Variable name="mainfont.mediumitalic" description="Main Font Medium Italic" hideEditor="true" type="font" default="italic 500 14px $(main.font.family)" value="italic 500 14px $(family)"/>
<Variable name="mainfont.semibolditalic" description="Main Font SemiBold Italic" hideEditor="true" type="font" default="italic 600 14px $(main.font.family)" value="italic 600 14px $(family)"/>
<Variable name="mainfont.bolditalic" description="Main Font Bold Italic" hideEditor="true" type="font" default="italic 700 14px $(main.font.family)" value="italic 700 14px $(family)"/>

<!-- Title Font -->
<Variable name="titlefont.medium" description="Title Font Medium" hideEditor="true" type="font" default="normal 500 14px $(title.font.family)" value="normal 500 14px $(family)"/>
<Variable name="titlefont.semibold" description="Title Font SemiBold" hideEditor="true" type="font" default="normal 600 14px $(title.font.family)" value="normal 600 14px $(family)"/>
<Variable name="titlefont.bold" description="Title Font Bold" hideEditor="true" type="font" default="normal 700 14px $(title.font.family)" value="normal 700 14px $(family)"/>
<Variable name="titlefont.italic" description="Title Font Italic" hideEditor="true" type="font" default="italic 400 14px $(title.font.family)" value="italic 400 14px $(family)"/>
<Variable name="titlefont.mediumitalic" description="Title Font Medium Italic" hideEditor="true" type="font" default="italic 500 14px $(title.font.family)" value="italic 500 14px $(family)"/>
<Variable name="titlefont.semibolditalic" description="Title Font SemiBold Italic" hideEditor="true" type="font" default="italic 600 14px $(title.font.family)" value="italic 600 14px $(family)"/>
<Variable name="titlefont.bolditalic" description="Title Font Bold Italic" hideEditor="true" type="font" default="italic 700 14px $(title.font.family)" value="italic 700 14px $(family)"/>

<!-- Meta Font -->
<Variable name="metafont.italic" description="Meta Font Italic" hideEditor="true" type="font" default="italic 400 14px $(meta.font.family)" value="italic 400 14px $(family)"/>

<!-- Text Font -->
<Variable name="textfont.medium" description="Text Font Medium" hideEditor="true" type="font" default="normal 500 14px $(text.font.family)" value="normal 500 14px $(family)"/>
<Variable name="textfont.semibold" description="Text Font SemiBold" hideEditor="true" type="font" default="normal 600 14px $(text.font.family)" value="normal 600 14px $(family)"/>
<Variable name="textfont.bold" description="Text Font Bold" hideEditor="true" type="font" default="normal 700 14px $(text.font.family)" value="normal 700 14px $(family)"/>
<Variable name="textfont.italic" description="Text Font Italic" hideEditor="true" type="font" default="italic 400 14px $(text.font.family)" value="italic 400 14px $(family)"/>
<Variable name="textfont.mediumitalic" description="Text Font Medium Italic" hideEditor="true" type="font" default="italic 500 14px $(text.font.family)" value="italic 500 14px $(family)"/>
<Variable name="textfont.semibolditalic" description="Text Font SemiBold Italic" hideEditor="true" type="font" default="italic 600 14px $(text.font.family)" value="italic 600 14px $(family)"/>
<Variable name="textfont.bolditalic" description="Text Font Bold Italic" hideEditor="true" type="font" default="italic 700 14px $(text.font.family)" value="italic 700 14px $(family)"/>
*/

/*-- Google Poppins Font --*/
@font-face{font-family:'Poppins';font-style:italic;font-weight:400;src:local('Poppins Italic'),local(Poppins-Italic),url(https://fonts.gstatic.com/s/poppins/v6/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:italic;font-weight:400;src:local('Poppins Italic'),local(Poppins-Italic),url(https://fonts.gstatic.com/s/poppins/v6/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:italic;font-weight:400;src:local('Poppins Italic'),local(Poppins-Italic),url(https://fonts.gstatic.com/s/poppins/v6/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:italic;font-weight:500;src:local('Poppins Medium Italic'),local(Poppins-MediumItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmg1hVFteOcEg.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:italic;font-weight:500;src:local('Poppins Medium Italic'),local(Poppins-MediumItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmg1hVGdeOcEg.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:italic;font-weight:500;src:local('Poppins Medium Italic'),local(Poppins-MediumItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmg1hVF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:italic;font-weight:600;src:local('Poppins SemiBold Italic'),local(Poppins-SemiBoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmr19VFteOcEg.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:italic;font-weight:600;src:local('Poppins SemiBold Italic'),local(Poppins-SemiBoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmr19VGdeOcEg.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:italic;font-weight:600;src:local('Poppins SemiBold Italic'),local(Poppins-SemiBoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmr19VF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:italic;font-weight:700;src:local('Poppins Bold Italic'),local(Poppins-BoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmy15VFteOcEg.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:italic;font-weight:700;src:local('Poppins Bold Italic'),local(Poppins-BoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:italic;font-weight:700;src:local('Poppins Bold Italic'),local(Poppins-BoldItalic),url(https://fonts.gstatic.com/s/poppins/v6/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:normal;font-weight:400;src:local('Poppins Regular'),local(Poppins-Regular),url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:normal;font-weight:400;src:local('Poppins Regular'),local(Poppins-Regular),url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:normal;font-weight:400;src:local('Poppins Regular'),local(Poppins-Regular),url(https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:normal;font-weight:500;src:local('Poppins Medium'),local(Poppins-Medium),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:normal;font-weight:500;src:local('Poppins Medium'),local(Poppins-Medium),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:normal;font-weight:500;src:local('Poppins Medium'),local(Poppins-Medium),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:normal;font-weight:600;src:local('Poppins SemiBold'),local(Poppins-SemiBold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z11lFc-K.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:normal;font-weight:600;src:local('Poppins SemiBold'),local(Poppins-SemiBold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:normal;font-weight:600;src:local('Poppins SemiBold'),local(Poppins-SemiBold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Poppins';font-style:normal;font-weight:700;src:local('Poppins Bold'),local(Poppins-Bold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format("woff2");unicode-range:U+0900-097F,U+1CD0-1CF6,U+1CF8-1CF9,U+200C-200D,U+20A8,U+20B9,U+25CC,U+A830-A839,U+A8E0-A8FB}
@font-face{font-family:'Poppins';font-style:normal;font-weight:700;src:local('Poppins Bold'),local(Poppins-Bold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Poppins';font-style:normal;font-weight:700;src:local('Poppins Bold'),local(Poppins-Bold),url(https://fonts.gstatic.com/s/poppins/v6/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}

/*-- Reset CSS --*/
a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{padding:0;border:0;outline:0;vertical-align:baseline;background:0 0;text-decoration:none}form,textarea,input,button{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-sizing:border-box;border-radius:0}dl,ul{list-style-position:inside;font-weight:400;list-style:none}ul li{list-style:none}caption,th{text-align:center}img{border:none;position:relative}a,a:visited{text-decoration:none}.clearfix{clear:both}.section,.widget,.widget ul{margin:0;padding:0}a{color:$(body.link.color)}a img{border:0}abbr{text-decoration:none}.CSS_LIGHTBOX{z-index:999999!important}.CSS_LIGHTBOX_ATTRIBUTION_INDEX_CONTAINER .CSS_HCONT_CHILDREN_HOLDER > .CSS_LAYOUT_COMPONENT.CSS_HCONT_CHILD:first-child > .CSS_LAYOUT_COMPONENT{opacity:0}.separator a{clear:none!important;float:none!important;margin-left:0!important;margin-right:0!important}#Navbar1,#navbar-iframe,.widget-item-control,a.quickedit,.home-link,.feed-links{display:none!important}.center{display:table;margin:0 auto;position:relative}.widget > h2,.widget > h3{display:none}.widget iframe,.widget img{max-width:100%}

div#stressthinking2 {
    text-align: center;
    margin-top: 15px;
}

/*-- Body Content CSS --*/
:root{--body-font:$(main.font.family);--title-font:$(title.font.family);--meta-font:$(meta.font.family);--text-font:$(text.font.family)}
body{position:relative;background-color:$(body.background.color);background:$(body.background);font-family:var(--body-font);font-size:14px;color:$(body.text.color);font-weight:400;font-style:normal;line-height:1.4em;word-wrap:break-word;margin:0;padding:0}
.rtl{direction:rtl}
.no-items.section{display:none}
h1,h2,h3,h4,h5,h6{font-family:var(--title-font);font-weight:700}
.title-oswald h1,.title-oswald h2,.title-oswald h3,.title-oswald h4,.title-oswald h5,.title-oswald h6{font-weight:500}
#outer-wrapper{position:relative;overflow:hidden;width:100%;max-width:100%;margin:0 auto;background-color:$(outer.bg);box-shadow:0 0 20px rgba(0,0,0,0.1)}
#outer-wrapper.boxed{max-width:calc($(row.width) + 60px)}
.row-x1{width:$(row.width)}
#content-wrapper{position:relative;float:left;width:100%;overflow:hidden;padding:30px 0;margin:0;border-top:0}
#content-wrapper > .container{margin:0 auto}
#main-wrapper{position:relative;float:left;width:calc(100% - ($(sidebar.width) + 30px));box-sizing:border-box;padding:0}
.left-sidebar #main-wrapper,.rtl #main-wrapper{float:right}
#sidebar-wrapper{position:relative;float:right;width:$(sidebar.width);box-sizing:border-box;padding:0}
.left-sidebar #sidebar-wrapper,.rtl #sidebar-wrapper{float:left}
.entry-image-link,.cmm-avatar,.comments .avatar-image-container{overflow:hidden;background-color:rgba(155,155,155,0.08);z-index:5;color:transparent!important}
.entry-thumb{display:block;position:relative;width:100%;height:100%;background-size:cover;background-position:center center;background-repeat:no-repeat;z-index:1;opacity:0;transition:opacity .35s ease,transform .3s ease}
.entry-thumb.lazy-ify{opacity:1}
.entry-image-link:hover .entry-thumb,.featured-item-inner:hover .entry-thumb,.block-posts-1 .block-inner:hover .entry-thumb,.block-posts-2 .block-inner:hover .entry-thumb,.column-inner:hover .entry-thumb{transform:scale(1.05)}
.before-mask:before{content:'';position:absolute;left:0;right:0;bottom:0;height:70%;background-image:linear-gradient(to bottom,transparent,rgba(0,0,0,0.65));-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:2;opacity:1;margin:0;transition:opacity .25s ease}
.entry-title{color:$(post.title.color)}
.entry-title a{color:$(post.title.color);display:block}
.entry-title a:hover{color:$(post.title.hover.color)}
.excerpt{font-family:var(--text-font)}
.entry-category{position:absolute;top:15px;left:15px;height:20px;background-color:$(tag.bg);font-size:11px;color:$(tag.color);font-weight:400;z-index:10;box-sizing:border-box;padding:0 5px;margin:0;border:1px solid rgba(0,0,0,.1);border-radius:2px}
.rtl .entry-category{left:unset;right:15px}
.entry-info{position:absolute;bottom:0;left:0;overflow:hidden;width:100%;background-image:linear-gradient(to bottom,transparent,rgba(0,0,0,0.3));z-index:10;box-sizing:border-box;padding:15px}
.entry-info .entry-meta{color:#eee}
.entry-info .entry-title{text-shadow:0 1px 2px rgba(0,0,0,0.5)}
.entry-info .entry-title a{color:#fff}
.social a:before{display:inline-block;font-family:'Font Awesome 5 Brands';font-style:normal;font-weight:400}
.social .blogger a:before{content:"\f37d"}
.social .facebook a:before{content:"\f082"}
.social .facebook-f a:before{content:"\f39e"}
.social .twitter a:before{content:"\f099"}
.social .rss a:before{content:"\f09e";font-family:'Font Awesome 5 Free';font-weight:900}
.social .youtube a:before{content:"\f167"}
.social .skype a:before{content:"\f17e"}
.social .stumbleupon a:before{content:"\f1a4"}
.social .tumblr a:before{content:"\f173"}
.social .vk a:before{content:"\f189"}
.social .stack-overflow a:before{content:"\f16c"}
.social .github a:before{content:"\f09b"}
.social .linkedin a:before{content:"\f0e1"}
.social .dribbble a:before{content:"\f17d"}
.social .soundcloud a:before{content:"\f1be"}
.social .behance a:before{content:"\f1b4"}
.social .digg a:before{content:"\f1a6"}
.social .instagram a:before{content:"\f16d"}
.social .pinterest a:before{content:"\f0d2"}
.social .pinterest-p a:before{content:"\f231"}
.social .twitch a:before{content:"\f1e8"}
.social .delicious a:before{content:"\f1a5"}
.social .codepen a:before{content:"\f1cb"}
.social .flipboard a:before{content:"\f44d"}
.social .reddit a:before{content:"\f281"}
.social .whatsapp a:before{content:"\f232"}
.social .messenger a:before{content:"\f39f"}
.social .snapchat a:before{content:"\f2ac"}
.social .telegram a:before{content:"\f3fe"}
.social .discord a:before{content:"\f392"}
.social .share a:before{content:"\f064";font-family:'Font Awesome 5 Free';font-weight:900}
.social .email a:before{content:"\f0e0";font-family:'Font Awesome 5 Free';font-weight:400}
.social .external-link a:before{content:"\f35d";font-family:'Font Awesome 5 Free';font-weight:900}
.social-bg .blogger a,.social-bg-hover .blogger a:hover{background-color:#ff5722}
.social-bg .facebook a,.social-bg .facebook-f a,.social-bg-hover .facebook a:hover,.social-bg-hover .facebook-f a:hover{background-color:#3b5999}
.social-bg .twitter a,.social-bg-hover .twitter a:hover{background-color:#00acee}
.social-bg .youtube a,.social-bg-hover .youtube a:hover{background-color:#f50000}
.social-bg .instagram a,.social-bg-hover .instagram a:hover{background:linear-gradient(15deg,#ffb13d,#dd277b,#4d5ed4)}
.social-bg .pinterest a,.social-bg .pinterest-p a,.social-bg-hover .pinterest a:hover,.social-bg-hover .pinterest-p a:hover{background-color:#ca2127}
.social-bg .dribbble a,.social-bg-hover .dribbble a:hover{background-color:#ea4c89}
.social-bg .linkedin a,.social-bg-hover .linkedin a:hover{background-color:#0077b5}
.social-bg .tumblr a,.social-bg-hover .tumblr a:hover{background-color:#365069}
.social-bg .twitch a,.social-bg-hover .twitch a:hover{background-color:#6441a5}
.social-bg .rss a,.social-bg-hover .rss a:hover{background-color:#ffc200}
.social-bg .skype a,.social-bg-hover .skype a:hover{background-color:#00aff0}
.social-bg .stumbleupon a,.social-bg-hover .stumbleupon a:hover{background-color:#eb4823}
.social-bg .vk a,.social-bg-hover .vk a:hover{background-color:#4a76a8}
.social-bg .stack-overflow a,.social-bg-hover .stack-overflow a:hover{background-color:#f48024}
.social-bg .github a,.social-bg-hover .github a:hover{background-color:#24292e}
.social-bg .soundcloud a,.social-bg-hover .soundcloud a:hover{background:linear-gradient(#ff7400,#ff3400)}
.social-bg .behance a,.social-bg-hover .behance a:hover{background-color:#191919}
.social-bg .digg a,.social-bg-hover .digg a:hover{background-color:#1b1a19}
.social-bg .delicious a,.social-bg-hover .delicious a:hover{background-color:#0076e8}
.social-bg .codepen a,.social-bg-hover .codepen a:hover{background-color:#000}
.social-bg .flipboard a,.social-bg-hover .flipboard a:hover{background-color:#f52828}
.social-bg .reddit a,.social-bg-hover .reddit a:hover{background-color:#ff4500}
.social-bg .whatsapp a,.social-bg-hover .whatsapp a:hover{background-color:#3fbb50}
.social-bg .messenger a,.social-bg-hover .messenger a:hover{background-color:#0084ff}
.social-bg .snapchat a,.social-bg-hover .snapchat a:hover{background-color:#ffe700}
.social-bg .telegram a,.social-bg-hover .telegram a:hover{background-color:#179cde}
.social-bg .discord a,.social-bg-hover .discord a:hover{background-color:#7289da}
.social-bg .share a,.social-bg-hover .share a:hover{background-color:$(meta.color)}
.social-bg .email a,.social-bg-hover .email a:hover{background-color:#888}
.social-bg .external-link a,.social-bg-hover .external-link a:hover{background-color:$(button.hover.bg)}
.social-color .blogger a,.social-color-hover .blogger a:hover{color:#ff5722}
.social-color .facebook a,.social-color .facebook-f a,.social-color-hover .facebook a:hover,.social-color-hover .facebook-f a:hover{color:#3b5999}
.social-color .twitter a,.social-color-hover .twitter a:hover{color:#00acee}
.social-color .youtube a,.social-color-hover .youtube a:hover{color:#f50000}
.social-color .instagram a,.social-color-hover .instagram a:hover{color:#dd277b}
.social-color .pinterest a,.social-color .pinterest-p a,.social-color-hover .pinterest a:hover,.social-color-hover .pinterest-p a:hover{color:#ca2127}
.social-color .dribbble a,.social-color-hover .dribbble a:hover{color:#ea4c89}
.social-color .linkedin a,.social-color-hover .linkedin a:hover{color:#0077b5}
.social-color .tumblr a,.social-color-hover .tumblr a:hover{color:#365069}
.social-color .twitch a,.social-color-hover .twitch a:hover{color:#6441a5}
.social-color .rss a,.social-color-hover .rss a:hover{color:#ffc200}
.social-color .skype a,.social-color-hover .skype a:hover{color:#00aff0}
.social-color .stumbleupon a,.social-color-hover .stumbleupon a:hover{color:#eb4823}
.social-color .vk a,.social-color-hover .vk a:hover{color:#4a76a8}
.social-color .stack-overflow a,.social-color-hover .stack-overflow a:hover{color:#f48024}
.social-color .github a,.social-color-hover .github a:hover{color:#24292e}
.social-color .soundcloud a,.social-color-hover .soundcloud a:hover{color:#ff7400}
.social-color .behance a,.social-color-hover .behance a:hover{color:#191919}
.social-color .digg a,.social-color-hover .digg a:hover{color:#1b1a19}
.social-color .delicious a,.social-color-hover .delicious a:hover{color:#0076e8}
.social-color .codepen a,.social-color-hover .codepen a:hover{color:#000}
.social-color .flipboard a,.social-color-hover .flipboard a:hover{color:#f52828}
.social-color .reddit a,.social-color-hover .reddit a:hover{color:#ff4500}
.social-color .whatsapp a,.social-color-hover .whatsapp a:hover{color:#3fbb50}
.social-color .messenger a,.social-color-hover .messenger a:hover{color:#0084ff}
.social-color .snapchat a,.social-color-hover .snapchat a:hover{color:#ffe700}
.social-color .telegram a,.social-color-hover .telegram a:hover{color:#179cde}
.social-color .discord a,.social-color-hover .discord a:hover{color:#7289da}
.social-color .share a,.social-color-hover .share a:hover{color:$(meta.color)}
.social-color .email a,.social-color-hover .email a:hover{color:#888}
.social-color .external-link a,.social-color-hover .external-link a:hover{color:$(button.hover.bg)}
#header-wrapper{position:relative;float:left;width:100%;margin:0}
.headerify-wrap,.headerify{position:relative;float:left;width:100%;height:60px;background-color:$(navbar.bg);box-sizing:border-box;padding:0;margin:0;border-bottom:1px solid $(navbar.border)}
#header-wrapper .container{position:relative;margin:0 auto}
.main-logo-wrap{position:relative;float:left;margin:0 30px 0 0}
.rtl .main-logo-wrap{float:right;margin:0 0 0 30px}
.main-logo{position:relative;float:left;width:100%;height:34px;padding:13px 0;margin:0}
.main-logo .main-logo-img{float:left;height:34px;overflow:hidden}
.main-logo img{max-width:100%;height:34px;margin:0}
.main-logo h1{font-size:22px;color:$(navbar.color);line-height:34px;margin:0}
.main-logo h1 a{color:$(navbar.color)}
.main-logo #h1-tag{position:absolute;top:-9000px;left:-9000px;display:none;visibility:hidden}
.main-menu-wrap{position:static;float:left;height:60px;margin:0}
.rtl .main-menu-wrap{float:right}
#magify-main-menu .widget,#magify-main-menu .widget > .widget-title{display:none}
#magify-main-menu .show-menu{display:block}
#magify-main-menu{position:static;width:100%;height:60px;z-index:10}
#magify-main-menu ul > li{position:relative;float:left;display:inline-block;padding:0;margin:0}
.rtl #magify-main-menu ul > li{float:right}
#magify-main-menu-nav > li > a{position:relative;display:block;height:60px;font-size:14px;color:$(navbar.color);font-weight:600;text-transform:uppercase;line-height:60px;padding:0 15px;margin:0}
.main-oswald #magify-main-menu-nav > li > a{font-weight:500}
#magify-main-menu-nav > li:hover > a{color:$(navbar.hover.color)}
#magify-main-menu ul > li > ul{position:absolute;float:left;left:0;top:60px;width:180px;background-color:$(submenu.bg);z-index:99999;visibility:hidden;opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);padding:0;box-shadow:0 2px 5px 0 rgba(0,0,0,0.15),0 2px 10px 0 rgba(0,0,0,0.17)}
.rtl #magify-main-menu ul > li > ul{left:auto;right:0}
#magify-main-menu ul > li > ul > li > ul{position:absolute;top:0;left:100%;-webkit-transform:translateX(-10px);transform:translateX(-10px);margin:0}
.rtl #magify-main-menu ul > li > ul > li > ul{left:unset;right:100%;-webkit-transform:translateX(10px);transform:translateX(10px)}
#magify-main-menu ul > li > ul > li{display:block;float:none;position:relative}
.rtl #magify-main-menu ul > li > ul > li{float:none}
#magify-main-menu ul > li > ul > li a{position:relative;display:block;height:36px;font-size:13px;color:$(submenu.color);line-height:36px;font-weight:400;box-sizing:border-box;padding:0 15px;margin:0;border-bottom:1px solid rgba(155,155,155,0.07)}
#magify-main-menu ul > li > ul > li:last-child a{border:0}
#magify-main-menu ul > li > ul > li:hover > a{color:$(submenu.hover.color)}
#magify-main-menu ul > li.has-sub > a:after{content:'\f078';float:right;font-family:'Font Awesome 5 Free';font-size:9px;font-weight:900;margin:-1px 0 0 5px}
.rtl #magify-main-menu ul > li.has-sub > a:after{float:left;margin:-1px 5px 0 0}
#magify-main-menu ul > li > ul > li.has-sub > a:after{content:'\f054';float:right;margin:0}
.rtl #magify-main-menu ul > li > ul > li.has-sub > a:after{content:'\f053'}
#magify-main-menu ul > li:hover > ul,#magify-main-menu ul > li > ul > li:hover > ul{visibility:visible;opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(0);transform:translate(0)}
#magify-main-menu ul ul{transition:all .17s ease}
#magify-main-menu .mega-menu{position:static!important}
#magify-main-menu .mega-menu > ul{width:100%;background-color:$(megamenu.bg);box-sizing:border-box;padding:20px 10px}
#magify-main-menu .mega-menu > ul.mega-widget{overflow:hidden}
.tab-active{display:block}
.tab-animated,.post-animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
@keyframes fadeIn {
from{opacity:0}
to{opacity:1}
}
.tab-fadeIn,.post-fadeIn{animation-name:fadeIn}
@keyframes fadeInUp {
from{opacity:0;transform:translate3d(0,5px,0)}
to{opacity:1;transform:translate3d(0,0,0)}
}
.tab-fadeInUp,.post-fadeInUp{animation-name:fadeInUp}
.mega-widget .mega-item{float:left;width:20%;box-sizing:border-box;padding:0 10px}
.rtl .mega-widget .mega-item{float:right}
.mega-widget .mega-content{position:relative;width:100%;overflow:hidden;padding:0}
.mega-content .entry-image-link{width:100%;height:134px;min-height:134px;background-color:rgba(255,255,255,0.01);z-index:1;display:block;position:relative;overflow:hidden;padding:0}
.mega-content .entry-title{position:relative;font-size:13px;font-weight:600;line-height:1.3em;margin:8px 0 0;padding:0}
.title-oswald .mega-content .entry-title{font-weight:500}
.mega-content .entry-title a{color:$(megamenu.post.title.color)}
.mega-content .entry-title a:hover{color:$(megamenu.post.title.hover)}
.mega-content .entry-meta{margin:2px 0 0}
.no-posts{display:block;font-size:14px;color:$(title.color);padding:30px 0;font-weight:400}
.mega-menu .no-posts{color:$(meta.color);text-align:center;padding:0}
.search-toggle{position:absolute;top:0;right:0;width:60px;height:60px;background-color:rgba(155,155,155,0.03);color:$(navbar.color);font-size:14px;text-align:center;line-height:60px;cursor:pointer;z-index:20;padding:0;margin:0;transition:margin .25s ease}
.rtl .search-toggle{right:unset;left:0}
.search-toggle:after{content:"\f002";font-family:'Font Awesome 5 Free';font-weight:900;margin:0}
.search-active .search-toggle:after{content:"\f00d"}
.search-toggle:hover{color:$(navbar.hover.color)}
#nav-search{position:absolute;top:70px;right:0;width:320px;max-width:100%;height:60px;z-index:25;background-color:$(submenu.bg);box-sizing:border-box;padding:10px;visibility:hidden;opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px);border-radius:2px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.15),0 2px 10px 0 rgba(0,0,0,0.17);transition:all .17s ease}
.search-active #nav-search{visibility:visible;opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(0);transform:translate(0)}
.rtl #nav-search{right:unset;left:0}
#nav-search:before{content:'';position:absolute;top:0;right:20px;width:0;height:0;border:10px solid transparent;border-bottom-color:$(submenu.bg);margin:-20px 0 0}
.rtl #nav-search:before{right:unset;left:20px}
#nav-search .search-form{width:100%;height:38px;background-color:rgba(155,155,155,0.03);display:flex;overflow:hidden;box-sizing:border-box;padding:2px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
#nav-search .search-input{width:100%;color:$(submenu.color);margin:0;padding:0 10px;background-color:rgba(0,0,0,0);font-family:inherit;font-size:14px;font-weight:400;box-sizing:border-box;border:0}
.rtl #nav-search .search-input{padding:0 15px 0 50px}
#nav-search .search-input:focus{color:$(submenu.color);outline:none}
#nav-search .search-input::placeholder{color:$(submenu.color);opacity:.5}
#nav-search .search-action{background-color:$(button.bg);font-family:inherit;font-size:14px;color:$(button.color);font-weight:600;cursor:pointer;padding:0 12px;margin:0;border:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
#nav-search .search-action:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.overlay{visibility:hidden;opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(23,28,36,0.6);z-index:1000;margin:0;transition:all .25s ease}
.show-mobile-menu{display:none;position:absolute;top:0;left:0;height:60px;color:$(navbar.color);font-size:16px;font-weight:600;line-height:60px;text-align:center;cursor:pointer;z-index:20;padding:0 20px}
.rtl .show-mobile-menu{left:auto;right:0}
.show-mobile-menu:before{content:"\f0c9";font-family:'Font Awesome 5 Free';font-weight:900}
.show-mobile-menu:hover{color:$(navbar.hover.color)}
#slide-menu{display:none;position:fixed;width:300px;height:100%;top:0;left:0;bottom:0;background-color:$(navbar.bg);overflow:auto;z-index:1010;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);visibility:hidden;box-shadow:3px 0 7px rgba(0,0,0,0.1);transition:all .25s ease}
.rtl #slide-menu{left:unset;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}
.nav-active #slide-menu,.rtl .nav-active #slide-menu{-webkit-transform:translateX(0);transform:translateX(0);visibility:visible}
.slide-menu-header{float:left;width:100%;height:60px;background-color:$(navbar.bg);overflow:hidden;box-sizing:border-box;box-shadow:0 0 20px rgba(0,0,0,0.15)}
.mobile-logo{float:left;max-width:calc(100% - 60px);height:34px;overflow:hidden;box-sizing:border-box;padding:0 20px;margin:13px 0 0}
.rtl .mobile-logo{float:right}
.mobile-logo a{display:block;height:34px;font-size:22px;color:$(navbar.color);line-height:34px;font-weight:700}
.title-oswald .mobile-logo a{font-weight:500}
.mobile-logo img{max-width:100%;height:34px}
.hide-mobile-menu{position:absolute;top:0;right:0;display:block;height:60px;color:$(navbar.color);font-size:16px;line-height:60px;text-align:center;cursor:pointer;z-index:20;padding:0 20px}
.rtl .hide-mobile-menu{right:auto;left:0}
.hide-mobile-menu:before{content:"\f00d";font-family:'Font Awesome 5 Free';font-weight:900}
.hide-mobile-menu:hover{color:$(navbar.hover.color)}
.slide-menu-flex{display:flex;flex-direction:column;justify-content:space-between;float:left;width:100%;height:calc(100% - 60px)}
.mobile-menu{position:relative;float:left;width:100%;box-sizing:border-box;padding:20px}
.mobile-menu > ul{margin:0}
.mobile-menu .m-sub{display:none;padding:0}
.mobile-menu ul li{position:relative;display:block;overflow:hidden;float:left;width:100%;font-size:14px;font-weight:600;line-height:40px;margin:0;padding:0}
.main-oswald .mobile-menu ul li{font-weight:500}
.mobile-menu > ul li ul{overflow:hidden}
.mobile-menu ul li a{color:$(navbar.color);padding:0;display:block}
.mobile-menu > ul > li > a{text-transform:uppercase}
.mobile-menu ul li.has-sub .submenu-toggle{position:absolute;top:0;right:0;color:$(navbar.color);cursor:pointer}
.rtl .mobile-menu ul li.has-sub .submenu-toggle{right:auto;left:0}
.mobile-menu ul li.has-sub .submenu-toggle:after{content:'\f078';font-family:'Font Awesome 5 Free';font-weight:900;float:right;width:40px;font-size:12px;text-align:right;transition:all .17s ease}
.rtl .mobile-menu ul li.has-sub .submenu-toggle:after{text-align:left}
.mobile-menu ul li.has-sub.show > .submenu-toggle:after{content:'\f077'}
.mobile-menu ul li a:hover,.mobile-menu ul li.has-sub.show > a,.mobile-menu ul li.has-sub.show > .submenu-toggle{color:$(navbar.hover.color)}
.mobile-menu > ul > li > ul > li a{font-size:13px;font-weight:400;opacity:.8;padding:0 0 0 15px}
.rtl .mobile-menu > ul > li > ul > li a{padding:0 15px 0 0}
.mobile-menu > ul > li > ul > li > ul > li > a{padding:0 0 0 30px}
.rtl .mobile-menu > ul > li > ul > li > ul > li > a{padding:0 30px 0 0}
.mobile-menu ul > li > .submenu-toggle:hover{color:$(navbar.hover.color)}
.social-mobile{position:relative;float:left;width:100%;margin:0}
.social-mobile ul{display:block;text-align:center;padding:20px;margin:0}
.social-mobile ul li{display:inline-block;margin:0 5px}
.social-mobile ul li a{display:block;font-size:15px;color:$(navbar.color);padding:0 5px}
.social-mobile ul li a:hover{color:$(navbar.hover.color)}
.is-fixed{position:fixed;top:-60px;left:0;width:100%;z-index:990;transition:top .17s ease}
.headerify.show{top:0;box-shadow:0 0 20px rgba(0,0,0,.15)}
.nav-active .is-fixed{top:0}
.loader{position:relative;height:100%;overflow:hidden;display:block;margin:0}
.loader:after{content:'';position:absolute;top:50%;left:50%;width:28px;height:28px;margin:-16px 0 0 -16px;border:2px solid $(main.color);border-right-color:rgba(155,155,155,0.2);border-radius:100%;animation:spinner 1.1s infinite linear;transform-origin:center}
@-webkit-keyframes spinner {
0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}
}
@keyframes spinner {
0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}
}
.header-ad-wrap{position:relative;float:left;width:100%;margin:0}
.header-ad-wrap .container{margin:0 auto}
.header-ad .widget{position:relative;float:left;width:100%;text-align:center;line-height:0;margin:30px 0 0}
.header-ad .widget > .widget-title{display:none}
.no-posts{display:block;font-size:14px;color:$(title.color);padding:30px 0;font-weight:400}
#featured-wrapper{position:relative;float:left;width:100%;margin:0}
#featured-wrapper .container{margin:0 auto}
#featured .widget,#featured .widget.HTML .widget-content,#featured .widget > .widget-title{display:none}
#featured .widget.HTML{display:block}
#featured .widget.HTML.show-ify .widget-content{display:block}
#featured .widget{position:relative;overflow:hidden;background-color:$(widget.bg);height:402px;padding:20px;margin:30px 0 0;border:1px solid $(widget.border.color)}
.nb-style #featured .widget{border:0}
#featured .widget-content{position:relative;overflow:hidden;height:402px;margin:0}
#featured .widget-content .no-posts{text-align:center;line-height:402px;padding:0}
.featured-posts{position:relative;height:402px;margin:0 -1px}
.featured-item{position:relative;float:right;width:25%;height:200px;overflow:hidden;box-sizing:border-box;padding:0 1px;margin:0}
.rtl .featured-item{float:left}
.featured-item.item-0{float:left;width:50%;height:402px}
.rtl .featured-item.item-0{float:right}
.featured-item.item-1{width:50%;margin:0 0 2px}
.featured-item-inner{position:relative;float:left;width:100%;height:100%;overflow:hidden;display:block;z-index:10}
.featured-item .entry-image-link{float:left;position:relative;width:100%;height:100%;overflow:hidden;display:block;z-index:5;margin:0}
.featured-item .entry-category{top:20px;left:20px}
.rtl .featured-item .entry-category{left:unset;right:20px}
.featured-item .entry-info{padding:25px 20px 20px}
.featured-item .entry-title{font-size:14px;font-weight:700;display:block;line-height:1.4em;margin:0;text-shadow:0 1px 2px rgba(0,0,0,0.5)}
.title-oswald .featured-item .entry-title{font-weight:500}
.featured-item.item-0 .entry-title{font-size:23px}
.featured-item.item-1 .entry-title{font-size:19px}
.featured-item .entry-meta{margin:7px 0 0}
.title-wrap{position:relative;float:left;width:100%;line-height:1;padding:0 0 15px;margin:0 0 20px;border-bottom:2px solid $(wtitle.border.color)}
.title-wrap:after{content:'';position:absolute;left:0;bottom:0;width:40px;height:2px;background-color:$(wtitle.dash.color);margin:0 0 -2px}
.rtl .title-wrap:after{left:unset;right:0}
.title-wrap > h3{float:left;font-family:var(--body-font);font-size:16px;color:$(wtitle.color);font-weight:700;margin:0}
.main-oswald .title-wrap > h3{font-weight:500}
.rtl .title-wrap > h3{float:right}
.title-wrap > a.more{float:right;font-size:12px;color:$(meta.color);line-height:16px;padding:0}
.rtl .title-wrap > a.more{float:left}
.title-wrap > a.more:hover{color:$(main.color)}
.block-posts{position:relative;float:left;width:100%;margin:0}
.block-posts .widget{display:none;position:relative;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:20px;margin:0 0 30px;border:1px solid $(widget.border.color)}
.nb-style .block-posts .widget{border:0}
#block-posts-2 .widget:first-child{margin:30px 0}
#block-posts-2 .widget:last-child{margin-bottom:0}
.block-posts .show-ify{display:block}
.block-posts .widget-content{position:relative;float:left;width:100%;display:block}
.block-posts .loader{height:180px}
.block-posts-1 .block-item{position:relative;float:left;width:calc((100% - 30px) / 2);overflow:hidden;padding:0;margin:20px 0 0}
.rtl .block-posts-1 .block-item{float:right}
.block-posts-1 .item-0{margin:0 30px 0 0}
.rtl .block-posts-1 .item-0{margin:0 0 0 30px}
.block-posts-1 .item-1{margin:0}
.block-posts-1 .block-inner{position:relative;width:100%;height:320px;overflow:hidden}
.block-posts-1 .entry-image-link{position:relative;width:85px;height:65px;float:left;display:block;overflow:hidden;margin:0 13px 0 0}
.rtl .block-posts-1 .entry-image-link{float:right;margin:0 0 0 13px}
.block-posts-1 .block-inner .entry-image-link{width:100%;height:100%;margin:0}
.block-posts-1 .block-item:not(.item-0) .entry-header{overflow:hidden}
.block-posts-1 .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:0}
.title-oswald .block-posts-1 .entry-title{font-weight:500}
.block-posts-1 .entry-info .entry-title{font-size:16px}
.block-posts-1 .entry-meta{margin:3px 0 0}
.block-posts-1 .item-0 .entry-meta{margin:5px 0 0}
.block-posts .block-column{width:calc((100% - 30px) / 2)}
.block-posts .column-left{float:left}
.block-posts .column-right{float:right}
.block-column .column-item{position:relative;float:left;width:100%;overflow:hidden;padding:0;margin:20px 0 0}
.block-column .column-item.item-0{margin:0 0 5px}
.column-inner{position:relative;width:100%;height:200px;overflow:hidden}
.column-posts .entry-image-link{position:relative;width:85px;height:65px;float:left;display:block;overflow:hidden;margin:0 13px 0 0}
.rtl .column-posts .entry-image-link{float:right;margin:0 0 0 13px}
.column-inner .entry-image-link{width:100%;height:100%;margin:0}
.column-posts .column-item:not(.item-0) .entry-header{overflow:hidden}
.column-posts .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:0}
.title-oswald .column-posts .entry-title{font-weight:500}
.column-posts .entry-info .entry-title{font-size:16px}
.column-posts .entry-meta{margin:3px 0 0}
.column-posts .item-0 .entry-meta{margin:5px 0 0}
.grid-posts-1{position:relative;overflow:hidden;display:flex;flex-wrap:wrap;padding:0;margin:0 -10px}
.grid-posts-1 .grid-item{position:relative;float:left;width:calc(100% / 3);box-sizing:border-box;padding:0 10px;margin:20px 0 0}
.rtl .grid-posts-1 .grid-item{float:right}
.grid-posts-1 .grid-item.item-0,.grid-posts-1 .grid-item.item-1,.grid-posts-1 .grid-item.item-2{margin:0}
.grid-posts-1 .entry-image{position:relative}
.grid-posts-1 .entry-image-link{width:100%;height:144px;position:relative;display:block;overflow:hidden}
.grid-posts-1 .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:8px 0 0}
.title-oswald .grid-posts-1 .entry-title{font-weight:500}
.grid-posts-1 .entry-meta{margin:3px 0 0}
.block-videos{position:relative;overflow:hidden;display:flex;flex-wrap:wrap;margin:0 -10px}
.block-videos .videos-item{position:relative;float:left;width:calc(100% / 3);overflow:hidden;box-sizing:border-box;padding:0 10px;margin:20px 0 0}
.rtl .block-videos .videos-item{float:right}
.block-videos .videos-item.item-0,.block-videos .videos-item.item-1,.block-videos .videos-item.item-2{margin:0}
.block-videos .entry-image-link{width:100%;height:144px;position:relative;display:block;overflow:hidden}
.block-videos .videos-inner:hover .entry-image-link:after{opacity:1}
.block-videos .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:8px 0 0}
.title-oswald .block-videos .entry-title{font-weight:500}
.block-videos .entry-meta{margin:3px 0 0}
.block-videos .video-icon{position:absolute;top:calc(50% - (34px / 2));right:calc(50% - (34px / 2));background-color:rgba(0,0,0,0.5);height:34px;width:34px;color:#fff;font-size:12px;text-align:center;line-height:32px;z-index:5;margin:0;box-sizing:border-box;border:2px solid #fff;border-radius:100%;opacity:.85;transition:opacity .25s ease}
.block-videos .video-icon:after{content:'\f04b';display:block;font-family:'Font Awesome 5 Free';font-weight:900;padding:0 0 0 3px}
.block-videos .videos-item:hover .video-icon{opacity:1}
.home-ad{position:relative;float:left;width:100%;margin:0}
.home-ad .widget{position:relative;float:left;width:100%;line-height:0;margin:0 0 30px}
#home-ads-2 .widget{margin:30px 0 0}
.home-ad .widget > .widget-title{display:block}
.home-ad .widget > .widget-title > h3.title{font-size:12px;color:$(meta.color);font-weight:400;line-height:12px;margin:0 0 5px}
#custom-ads{float:left;width:100%;opacity:0;visibility:hidden;box-sizing:border-box;padding:0 20px;margin:0;border:1px solid rgba(0,0,0,0)}
#before-ad,#after-ad{float:left;width:100%;margin:0}
#before-ad .widget > .widget-title,#after-ad .widget > .widget-title{display:block}
#before-ad .widget > .widget-title > h3.title,#after-ad .widget > .widget-title > h3.title{font-size:12px;color:$(meta.color);font-weight:400;line-height:12px;margin:0 0 5px}
#before-ad .widget,#after-ad .widget{width:100%;margin:25px 0 0}
#before-ad .widget-content,#after-ad .widget-content{position:relative;width:100%;line-height:1}
#new-before-ad #before-ad,#new-after-ad #after-ad{float:none;display:block;margin:0}
#new-before-ad #before-ad .widget,#new-after-ad #after-ad .widget{margin:0}
.item-post .FollowByEmail{box-sizing:border-box}
#main-wrapper #main{position:relative;float:left;width:100%;box-sizing:border-box;margin:0}
.index #main-wrapper #main{background-color:$(widget.bg);padding:20px;border:1px solid $(widget.border.color)}
.index.nb-style #main-wrapper #main{border:0}
.queryMessage{overflow:hidden;color:$(title.color);font-size:15px;font-weight:400;padding:0 0 15px;margin:0 0 20px;border-bottom:1px solid rgba(155,155,155,0.1)}
.queryMessage .query-info{margin:0}
.queryMessage .search-query,.queryMessage .search-label{color:$(title.color);font-weight:600}
.queryMessage .search-query:before,.queryMessage .search-label:before{content:"\201c"}
.queryMessage .search-query:after,.queryMessage .search-label:after{content:"\201d"}
.queryEmpty{font-size:13px;font-weight:400;padding:0;margin:40px 0;text-align:center}
.blog-post{display:block;word-wrap:break-word}
.item .blog-post{float:left;width:100%}
.index-post-wrap{position:relative;float:left;width:100%;box-sizing:border-box;padding:0;margin:0}
.post-animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
@keyframes fadeIn {
from{opacity:0}
to{opacity:1}
}
.post-fadeIn{animation-name:fadeIn}
@keyframes fadeInUp {
from{opacity:0;transform:translate3d(0,5px,0)}
to{opacity:1;transform:translate3d(0,0,0)}
}
.post-fadeInUp{animation-name:fadeInUp}
.index-post{position:relative;float:left;width:100%;box-sizing:border-box;padding:0 0 20px;margin:0 0 20px;border-bottom:1px solid rgba(155,155,155,0.1)}
.index-post.post-ad-type{padding:0 0 20px!important;margin:0 0 20px!important;border-width:1px!important}
.blog-posts .index-post:last-child{padding:0;margin:0;border:0}
.blog-posts .index-post.post-ad-type:last-child{padding:0!important;margin:0!important;border-width:0!important}
.index-post .entry-image{position:relative;float:left;width:245px;height:170px;overflow:hidden;margin:0 18px 0 0}
.rtl .index-post .entry-image{float:right;margin:0 0 0 18px}
.index-post .entry-image-link{position:relative;float:left;width:100%;height:100%;z-index:1;overflow:hidden}
.index-post .entry-header{overflow:hidden}
.index-post .entry-title{float:left;width:100%;font-size:23px;font-weight:700;line-height:1.4em;margin:0 0 15px}
.title-oswald .index-post .entry-title{font-weight:500}
.index-post .entry-excerpt{float:left;width:100%;font-size:14px;line-height:1.6em;margin:0}
.entry-meta{font-family:var(--meta-font);font-size:11px;color:$(meta.color);font-weight:400;overflow:hidden;padding:0 1px;margin:0}
.index-post .entry-meta{float:left;width:100%;font-size:12px;margin:0 0 15px}
.no-meta .entry-meta{display:none}
.entry-meta a{color:$(meta.color)}
.entry-meta a:hover{color:$(body.link.color)}
.entry-meta span{float:left;font-style:normal;margin:0 10px 0 0}
.rtl .entry-meta span{float:right;margin:0 0 0 10px}
.entry-meta span:before{display:inline-block;font-family:'Font Awesome 5 Free';font-size:11px;font-weight:400;font-style:normal;margin:0 5px 0 0}
.rtl .entry-meta span:before{margin:0 0 0 5px}
.entry-meta .entry-author:before{content:'\f007'}
.entry-meta .entry-time:before{content:'\f017'}
.entry-meta .entry-comments-link:before{content:'\f086'}
.entry-meta .entry-comments-link{display:none}
.entry-meta .entry-comments-link.show{display:block}
.inline-ad-wrap{position:relative;float:left;width:100%;margin:0}
.inline-ad{position:relative;float:left;width:100%;text-align:center;line-height:1;margin:0}
.item-post-inner{position:relative;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:0;margin:0;border:1px solid $(widget.border.color)}
.nb-style .item-post-inner{border:0}
.item-post-padd{position:relative;float:left;width:100%;box-sizing:border-box;padding:20px 20px 25px;margin:0}
#breadcrumb{font-family:var(--meta-font);font-size:13px;color:$(meta.color);font-weight:400;margin:0 0 15px}
#breadcrumb a{color:$(meta.color);transition:color .25s}
#breadcrumb a.home{color:$(body.link.color)}
#breadcrumb a:hover{color:$(body.link.color)}
#breadcrumb a,#breadcrumb em{display:inline-block}
#breadcrumb .delimiter:after{content:'\f054';font-family:'Font Awesome 5 Free';font-size:9px;font-weight:900;font-style:normal;margin:0 3px}
.rtl #breadcrumb .delimiter:after{content:'\f053'}
.item-post .blog-entry-header{position:relative;float:left;width:100%;overflow:hidden;padding:0 0 20px;margin:0;border-bottom:1px solid rgba(155,155,155,0.1)}
.item-post h1.entry-title{font-size:$(itempost.title.size);line-height:1.4em;font-weight:700;position:relative;display:block;margin:0}
.item-post .has-meta h1.entry-title{margin-bottom:20px}
.item-post .blog-entry-header .entry-meta{font-size:13px}
.item-post .blog-entry-header .entry-meta span:before{font-size:12px}
#post-body{position:relative;float:left;width:100%;font-family:var(--text-font);font-size:$(itempost.content.size);color:$(post.text.color);line-height:1.6em;padding:25px 0 0;margin:0}
.post-body h1,.post-body h2,.post-body h3,.post-body h4{font-size:18px;color:$(post.title.color);margin:0 0 15px}
.post-body h1,.post-body h2{font-size:23px}
.post-body h3{font-size:21px}
blockquote{background-color:rgba(155,155,155,0.05);color:$(post.title.color);font-style:italic;padding:15px 25px;margin:0;border-left:3px solid rgba(155,155,155,0.2)}
.rtl blockquote{border-left:0;border-right:3px solid rgba(155,155,155,0.2)}
blockquote:before,blockquote:after{display:inline-block;font-family:'Font Awesome 5 Free';font-style:normal;font-weight:900;color:$(post.title.color);line-height:1}
blockquote:before,.rtl blockquote:after{content:'\f10d';margin:0 10px 0 0}
blockquote:after,.rtl blockquote:before{content:'\f10e';margin:0 0 0 10px}
.post-body ul,.widget .post-body ol{line-height:1.5em;font-weight:400;padding:0 0 0 15px;margin:10px 0}
.rtl .post-body ul,.rtl .widget .post-body ol{padding:0 15px 0 0}
.post-body li{margin:5px 0;padding:0;line-height:1.5em}
.post-body ul li{list-style:disc inside}
.post-body ol li{list-style:decimal inside}
.post-body u{text-decoration:underline}
.post-body strike{text-decoration:line-through}
.post-body a{color:$(body.link.color)}
.post-body a:hover{text-decoration:underline}
.post-body a.button{display:inline-block;height:31px;background-color:$(button.bg);font-family:var(--body-font);font-size:14px;color:$(button.color);font-weight:400;line-height:31px;text-align:center;text-decoration:none;cursor:pointer;padding:0 15px;margin:0 5px 5px 0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.rtl .post-body a.button{margin:0 0 5px 5px}
.post-body a.colored-button{color:#fff}
.post-body a.button:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.post-body a.colored-button:hover{background-color:$(button.hover.bg)!important;color:$(button.hover.color)!important}
.button:before{font-family:'Font Awesome 5 Free';font-weight:900;display:inline-block;margin:0 5px 0 0}
.rtl .button:before{margin:0 0 0 5px}
.button.preview:before{content:"\f06e"}
.button.download:before{content:"\f019"}
.button.link:before{content:"\f0c1"}
.button.cart:before{content:"\f07a"}
.button.info:before{content:"\f06a"}
.button.share:before{content:"\f1e0"}
.button.contact:before{content:"\f0e0";font-weight:400}
.alert-message{position:relative;display:block;padding:15px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
.alert-message.alert-success{background-color:rgba(34,245,121,0.03);border:1px solid rgba(34,245,121,0.5)}
.alert-message.alert-info{background-color:rgba(55,153,220,0.03);border:1px solid rgba(55,153,220,0.5)}
.alert-message.alert-warning{background-color:rgba(185,139,61,0.03);border:1px solid rgba(185,139,61,0.5)}
.alert-message.alert-error{background-color:rgba(231,76,60,0.03);border:1px solid rgba(231,76,60,0.5)}
.alert-message:before{font-family:'Font Awesome 5 Free';font-size:16px;font-weight:900;display:inline-block;margin:0 5px 0 0}
.rtl .alert-message:before{margin:0 0 0 5px}
.alert-message.alert-success:before{content:"\f058"}
.alert-message.alert-info:before{content:"\f05a"}
.alert-message.alert-warning:before{content:"\f06a"}
.alert-message.alert-error:before{content:"\f057"}
.contact-form{overflow:hidden}
.contact-form .widget-title{display:none}
.contact-form .contact-form-name{width:calc(50% - 5px)}
.rtl .contact-form .contact-form-name{float:right}
.contact-form .contact-form-email{width:calc(50% - 5px);float:right}
.rtl .contact-form .contact-form-email{float:left}
.contact-form .contact-form-button-submit{font-family:var(--body-font)}
#post-body .contact-form-button-submit{height:34px;line-height:34px}
.code-box{position:relative;display:block;background-color:rgba(155,155,155,0.1);font-family:Monospace;font-size:13px;white-space:pre-wrap;line-height:1.4em;padding:10px;margin:0;border:1px solid rgba(155,155,155,0.3);border-radius:2px}
.post-footer{position:relative;float:left;width:100%;box-sizing:border-box;padding:0}
.entry-tags{overflow:hidden;float:left;width:100%;height:auto;position:relative;margin:25px 0 0}
.entry-tags a,.entry-tags span{float:left;height:24px;background-color:rgba(155,155,155,0.05);font-size:11px;color:$(meta.color);font-weight:400;line-height:22px;box-sizing:border-box;padding:0 9px;margin:5px 5px 0 0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.rtl .entry-tags a,.rtl .entry-tags span{float:right;margin:5px 0 0 5px}
.entry-tags span{background-color:$(darkbutton.bg);color:$(darkbutton.color)}
.entry-tags a:hover{background-color:$(button.bg);color:$(button.color)}
.post-share{position:relative;float:left;width:100%;background-color:rgba(155,155,155,0.02);overflow:hidden;box-sizing:border-box;padding:15px 20px 20px;margin:0;border-top:1px solid $(widget.border.color)}
.nb-style .post-share{background-color:$(widget.bg);border-top:1px solid rgba(155,155,155,0.1)}
.entry-header .post-share,.nb-style .entry-header .post-share{background-color:$(widget.bg);padding:15px 0 0;margin:20px 0 0;border-top:1px solid rgba(155,155,155,0.1)}
ul.share-links{position:relative}
.share-links li{float:left;overflow:hidden;margin:5px 5px 0 0}
.rtl .share-links li{float:right;margin:5px 0 0 5px}
.share-links li a,.share-links li.share-icon span{display:block;width:36px;height:34px;line-height:32px;color:#fff;font-size:15px;font-weight:400;cursor:pointer;text-align:center;box-sizing:border-box;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.share-links li.share-icon span{position:relative;background-color:$(widget.bg);font-size:14px;color:$(title.color);cursor:auto;margin:0 5px 0 0}
.rtl .share-links li.share-icon span{margin:0 0 0 5px}
.share-links li.share-icon span:before{content:'\f1e0';font-family:'Font Awesome 5 Free';font-weight:900}
.share-links li.share-icon span:after{content:'';position:absolute;width:6px;height:6px;top:11px;right:-4px;background-color:$(widget.bg);border:1px solid rgba(0,0,0,.1);border-left-color:rgba(0,0,0,0);border-bottom-color:rgba(0,0,0,0);transform:rotate(45deg)}
.rtl .share-links li.share-icon span:after{left:-4px;right:unset;border:1px solid rgba(0,0,0,.1);border-top-color:rgba(0,0,0,0);border-right-color:rgba(0,0,0,0)}
.share-links li a.facebook,.share-links li a.twitter{width:auto}
.share-links li a.facebook:before,.share-links li a.twitter:before{width:32px;background-color:rgba(255,255,255,0.05)}
.share-links li a span{font-size:14px;padding:0 15px}
.share-links li a:hover{opacity:.8}
.share-links .show-hid a{background-color:rgba(155,155,155,0.1);font-size:14px;color:$(meta.color)}
.share-links .show-hid a:before{content:'\f067';font-family:'Font Awesome 5 Free';font-weight:900}
.show-hidden .show-hid a:before{content:'\f068'}
.share-links li.linkedin,.share-links li.reddit,.share-links li.whatsapp,.share-links li.telegram{display:none}
.show-hidden li.linkedin,.show-hidden li.reddit,.show-hidden li.whatsapp,.show-hidden li.telegram{display:inline-block}
.about-author{position:relative;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:20px;margin:30px 0 0;border:1px solid $(widget.border.color)}
.nb-style .about-author{border:0}
.about-author .avatar-container{position:relative;float:left;width:60px;height:60px;background-color:rgba(155,155,155,0.1);overflow:hidden;margin:0 17px 0 0}
.rtl .about-author .avatar-container{float:right;margin:0 0 0 17px}
.about-author .author-avatar{float:left;width:100%;height:100%;background-size:100% 100%;background-position:0 0;background-repeat:no-repeat;opacity:0;overflow:hidden;transition:opacity .35s ease}
.about-author .author-avatar.lazy-ify{opacity:1}
.about-author .author-name{display:block;font-size:19px;color:$(title.color);font-weight:700;margin:0 0 12px}
.title-oswald .about-author .author-name{font-weight:500}
.about-author .author-name a{color:$(title.color)}
.about-author .author-name a:hover{color:$(title.hover.color);text-decoration:none}
.author-description{overflow:hidden}
.author-description span{display:block;overflow:hidden;font-size:14px;color:$(body.text.color);font-weight:400;line-height:1.6em}
.author-description span br{display:none}
.author-description a{display:none;float:left;font-size:13px;color:$(body.text.color);box-sizing:border-box;padding:0;margin:12px 12px 0 0}
.rtl .author-description a{float:right;margin:12px 0 0 12px}
.author-description.show-icons li,.author-description.show-icons a{display:inline-block}
#related-wrap{overflow:hidden;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:20px;margin:30px 0 0;border:1px solid $(widget.border.color)}
.nb-style #related-wrap{border:0}
#related-wrap .related-tag{display:none}
.related-content{float:left;width:100%}
.related-content .loader{height:200px}
.related-posts{position:relative;overflow:hidden;display:flex;flex-wrap:wrap;padding:0;margin:0 -10px}
.related-posts .related-item{position:relative;float:left;width:calc(100% / 3);box-sizing:border-box;padding:0 10px;margin:20px 0 0}
.rtl .related-posts .related-item{float:right}
.related-posts .related-item.item-0,.related-posts .related-item.item-1,.related-posts .related-item.item-2{margin:0}
.related-posts .entry-image{position:relative}
.related-posts .entry-image-link{width:100%;height:140px;position:relative;display:block;overflow:hidden}
.related-posts .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:8px 0 0}
.title-oswald .related-posts .entry-title{font-weight:500}
.related-posts .entry-meta{margin:3px 0 0}
.post-nav{float:left;width:100%;font-size:13px;margin:30px 0 0}
.post-nav a{color:$(meta.color)}
.post-nav a:hover{color:$(title.hover.color)}
.post-nav span{color:$(meta.color);opacity:.8}
.post-nav .blog-pager-newer-link:before,.post-nav .blog-pager-older-link:after{margin-top:1px}
.post-nav .blog-pager-newer-link,.rtl .post-nav .blog-pager-older-link{float:left}
.post-nav .blog-pager-older-link,.rtl .post-nav .blog-pager-newer-link{float:right}
.post-nav .blog-pager-newer-link:before,.rtl .post-nav .blog-pager-older-link:after{content:'\f053';float:left;font-family:'Font Awesome 5 Free';font-size:9px;font-weight:900;margin:0 4px 0 0}
.post-nav .blog-pager-older-link:after,.rtl .post-nav .blog-pager-newer-link:before{content:'\f054';float:right;font-family:'Font Awesome 5 Free';font-size:9px;font-weight:900;margin:0 0 0 4px}
#blog-pager{float:left;width:100%;font-size:15px;font-weight:500;text-align:center;clear:both;box-sizing:border-box;padding:30px 0 0;margin:30px 0 10px;border-top:1px solid rgba(155,155,155,0.1)}
#blog-pager .load-more{display:inline-block;height:34px;background-color:$(button.bg);font-size:14px;color:$(button.color);font-weight:400;line-height:34px;box-sizing:border-box;padding:0 30px;margin:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
#blog-pager #load-more-link{color:$(button.color);cursor:pointer}
#blog-pager #load-more-link:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
#blog-pager .load-more.no-more{background-color:rgba(155,155,155,0.05);color:$(meta.color)}
#blog-pager .loading,#blog-pager .no-more{display:none}
#blog-pager .loading .loader{height:34px}
#blog-pager .no-more.show{display:inline-block}
#blog-pager .loading .loader:after{width:26px;height:26px;margin:-15px 0 0 -15px}
.blog-post-comments{display:none;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:20px;margin:30px 0 0;border:1px solid $(widget.border.color)}
.nb-style .blog-post-comments{border:0}
.blog-post-comments.comments-system-disqus,.blog-post-comments.comments-system-facebook{padding:10px 20px}
#comments,#disqus_thread{float:left;width:100%}
.blog-post-comments .fb_iframe_widget_fluid_desktop,.blog-post-comments .fb_iframe_widget_fluid_desktop span,.blog-post-comments .fb_iframe_widget_fluid_desktop iframe{float:left;display:block!important;width:100%!important}
.fb-comments{padding:0;margin:0}
.comments{display:block;clear:both;padding:0;margin:0}
.comments .comments-content{float:left;width:100%;margin:0}
#comments h4#comment-post-message{display:none}
.comments .comment-block{padding:20px 0 0 50px;border-top:1px solid rgba(155,155,155,0.1)}
.rtl .comments .comment-block{padding:20px 50px 0 0}
.comments .comment-content{font-family:var(--text-font);font-size:14px;color:$(body.text.color);line-height:1.6em;margin:15px 0}
.comments .comment-content > a:hover{text-decoration:underline}
.comment-thread .comment{position:relative;padding:0;margin:25px 0 0;list-style:none;border-radius:0}
.comment-thread ol{padding:0;margin:0}
.toplevel-thread ol > li:first-child{margin:0}
.toplevel-thread ol > li:first-child > .comment-block{padding-top:0;margin:0;border:0}
.comment-thread.toplevel-thread > ol > .comment > .comment-replybox-single iframe{box-sizing:border-box;padding:0 0 0 50px;margin:20px 0 0}
.rtl .comment-thread.toplevel-thread > ol > .comment > .comment-replybox-single iframe{padding:0 50px 0 0}
.comment-thread ol ol .comment:before{content:'\f3bf';position:absolute;left:-25px;top:-10px;font-family:'Font Awesome 5 Free';font-size:16px;color:rgba(155,155,155,0.1);font-weight:700;transform:rotate(90deg);margin:0}
.comment-thread .avatar-image-container{position:absolute;top:20px;left:0;width:35px;height:35px;overflow:hidden}
.toplevel-thread ol > li:first-child > .avatar-image-container{top:0}
.rtl .comment-thread .avatar-image-container{left:auto;right:0}
.avatar-image-container img{width:100%;height:100%}
.comments .comment-header .user{font-family:var(--title-font);font-size:18px;color:$(title.color);display:inline-block;font-style:normal;font-weight:700;margin:0 0 3px}
.title-oswald .comments .comment-header .user{font-weight:500}
.comments .comment-header .user a{color:$(title.color)}
.comments .comment-header .user a:hover{color:$(title.hover.color)}
.comments .comment-header .icon.user{display:none}
.comments .comment-header .icon.blog-author{display:inline-block;font-size:12px;color:$(main.color);font-weight:400;vertical-align:top;margin:-3px 0 0 5px}
.rtl .comments .comment-header .icon.blog-author{margin:-3px 5px 0 0}
.comments .comment-header .icon.blog-author:before{content:'\f058';font-family:'Font Awesome 5 Free';font-weight:400}
.comments .comment-header .datetime{float:right;margin:0}
.rtl .comments .comment-header .datetime{float:left}
.comment-header .datetime a{font-family:var(--meta-font);font-size:11px;color:$(meta.color);padding:0}
.comments .comment-actions{display:block;margin:0}
.comments .comment-actions a{display:inline-block;height:18px;background-color:rgba(155,155,155,0.05);font-size:11px;color:$(meta.color);font-style:normal;line-height:16px;padding:0 7px;margin:0 12px 0 0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.rtl .comments .comment-actions a{margin:0 0 0 12px}
.comments .comment-actions a:hover{background-color:$(button.bg);color:$(button.color)}
.item-control{display:none}
.loadmore.loaded a{display:inline-block;border-bottom:1px solid rgba(155,155,155,.51);text-decoration:none;margin-top:15px}
.comments .continue{display:none}
.comments .toplevel-thread > #top-continue a{display:block;color:$(body.link.color);padding:0 0 0 50px;margin:30px 0 0}
.rtl .comments .toplevel-thread > #top-continue a{padding:0 50px 0 0}
.comments .toplevel-thread > #top-continue a:hover{color:$(title.color)}
.comments .comment-replies{padding:0 0 0 50px}
.thread-expanded .thread-count a,.loadmore{display:none}
.comments .footer,.comments .comment-footer{float:left;width:100%;font-size:13px;margin:0}
.comments .comment-thread > .comment-replybox-thread{margin:30px 0 0}
.comment-form{float:left;width:100%;margin:0}
p.comments-message{float:left;width:100%;font-size:12px;color:$(meta.color);font-style:italic;padding:0 0 20px;margin:0 0 20px;border-bottom:1px solid rgba(155,155,155,0.1)}
.no-comments p.comments-message{margin:0;border:0}
p.comments-message > a{color:$(body.link.color)}
p.comments-message > a:hover{color:$(title.color)}
p.comments-message > em{color:#d63031;font-style:normal}
.comment-form > p{display:none}
p.comment-footer span{color:$(meta.color)}
p.comment-footer span:after{content:'\002A';color:#d63031}
#sidebar-wrapper .sidebar{float:left;width:100%}
.sidebar > .widget{position:relative;float:left;width:100%;background-color:$(widget.bg);box-sizing:border-box;padding:20px;margin:0 0 30px;border:1px solid $(widget.border.color)}
.nb-style .sidebar > .widget{border:0}
#sidebar > .widget:last-child,#sidebar-ads > .widget{margin:0}
.post .sidebar-ads-active #sidebar > .widget:last-child{margin:0 0 30px}
.sidebar > .widget.no-style{background-color:rgba(0,0,0,0);padding:0;border:0;border-radius:0;box-shadow:unset}
.sidebar > .widget .widget-title{position:relative;float:left;width:100%;line-height:1;padding:0 0 15px;margin:0 0 20px;border-bottom:2px solid $(wtitle.border.color)}
.sidebar > .widget .widget-title:after{content:'';position:absolute;left:0;bottom:0;width:40px;height:2px;background-color:$(wtitle.dash.color);margin:0 0 -2px}
.rtl .sidebar > .widget .widget-title:after{left:unset;right:0}
.sidebar > .widget .widget-title > h3{float:left;font-family:var(--body-font);font-size:16px;color:$(wtitle.color);font-weight:700;margin:0}
.main-oswald .sidebar > .widget .widget-title > h3{font-weight:500}
.rtl .sidebar > .widget .widget-title > h3{float:right}
.sidebar > .widget.no-style .widget-title{display:none}
.sidebar .widget-content{float:left;width:100%;box-sizing:border-box;padding:0;margin:0}
.sidebar ul.social-icons{display:flex;flex-wrap:wrap;margin:0 -2px}
.sidebar .social-icons li{float:left;width:calc(100% / 3);box-sizing:border-box;padding:0 2px;margin:4px 0 0}
.rtl .sidebar .social-icons li{float:right}
.sidebar .social-icons li.link-0,.sidebar .social-icons li.link-1,.sidebar .social-icons li.link-2{margin:0}
.sidebar .social-icons li a{float:left;width:100%;height:32px;font-size:15px;color:#fff;text-align:center;line-height:32px;box-sizing:border-box;padding:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.sidebar .social-icons li a.instagram{border:0}
.sidebar .social-icons li a:before{float:left;width:30px;height:29px;line-height:30px;background-color:rgba(255,255,255,0.05);margin:0}
.sidebar .social-icons li a.instagram:before{height:32px;line-height:32px}
.rtl .sidebar .social-icons li a:before{float:right}
.sidebar .social-icons li a span{float:right;font-size:14px;padding:0 13px}
.rtl .sidebar .social-icons li a span{float:left}
.sidebar .social-icons li a:hover{opacity:.85}
.sidebar .loader{height:180px}
.custom-widget .custom-item{display:block;overflow:hidden;padding:0;margin:20px 0 0}
.custom-widget .custom-item.item-0{margin:0}
.custom-widget .entry-image-link{position:relative;float:left;width:85px;height:65px;overflow:hidden;margin:0 13px 0 0}
.rtl .custom-widget .entry-image-link{float:right;margin:0 0 0 13px}
.custom-widget .entry-image-link .entry-thumb{width:85px;height:65px}
.custom-widget .cmm-avatar{width:55px;height:55px}
.custom-widget .cmm-avatar .entry-thumb{width:55px;height:55px}
.custom-widget .cmm-snippet{display:block;font-size:11px;line-height:1.5em;margin:4px 0 0}
.custom-widget .entry-header{overflow:hidden}
.custom-widget .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:0}
.title-oswald .custom-widget .entry-title{font-weight:500}
.custom-widget .entry-meta{margin:3px 0 0}
.PopularPosts .popular-post{display:block;overflow:hidden;padding:0;margin:20px 0 0}
.PopularPosts .popular-post.item-0{margin:0}
.PopularPosts .entry-image-link{position:relative;float:left;width:85px;height:65px;overflow:hidden;z-index:1;margin:0 13px 0 0}
.rtl .PopularPosts .entry-image-link{float:right;margin:0 0 0 13px}
.PopularPosts .entry-image-link .entry-thumb{width:85px;height:65px}
.PopularPosts .entry-header{overflow:hidden}
.PopularPosts .entry-title{font-size:14px;font-weight:700;line-height:1.4em;margin:0}
.title-oswald .PopularPosts .entry-title{font-weight:500}
.PopularPosts .entry-meta{margin:3px 0 0}
.FeaturedPost .entry-image-link{position:relative;float:left;width:100%;height:175px;z-index:1;overflow:hidden;margin:0}
.FeaturedPost .entry-header{float:left;margin:0}
.FeaturedPost .entry-title{font-size:18px;font-weight:700;line-height:1.3em;margin:12px 0 0}
.title-oswald .FeaturedPost .entry-title{font-weight:500}
.FeaturedPost .entry-meta{margin:7px 0 0;font-size:13px}
.sidebar > .widget.FollowByEmail:before{content:'';position:absolute;height:4px;background-color:$(wtitle.dash.color);top:0;left:0;right:0;margin:-1px -1px 0}
.nb-style .sidebar > .widget.FollowByEmail:before{margin:0}
.FollowByEmail .widget-content{position:relative;box-sizing:border-box;padding:0}
.main .item-post-inner .FollowByEmail .widget-content-inner{box-sizing:border-box;padding:20px;border:1px solid rgba(155,155,155,0.2)}
.follow-by-email-content{position:relative;z-index:5}
.follow-by-email-title{font-family:var(--body-font);font-size:16px;color:$(title.color);font-weight:700;margin:0 0 13px}
.follow-by-email-text{font-size:13px;line-height:1.5em;margin:0 0 15px}
.follow-by-email-address{width:100%;height:34px;background-color:rgba(255,255,255,0.05);font-family:inherit;font-size:12px;color:$(meta.color);box-sizing:border-box;padding:0 10px;margin:0 0 10px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
.follow-by-email-address:focus{background-color:rgba(155,155,155,0.05);border-color:rgba(155,155,155,0.4)}
.follow-by-email-submit{width:100%;height:34px;background-color:$(button.bg);font-family:inherit;font-size:14px;color:$(button.color);font-weight:400;line-height:34px;cursor:pointer;padding:0 20px;border:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.follow-by-email-submit:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.list-label li,.archive-list li{position:relative;display:block}
.list-label li a,.archive-list li a{display:block;color:$(title.color);font-size:13px;font-weight:400;text-transform:capitalize;padding:5px 0}
.list-label li:first-child a,.archive-list li:first-child a{padding:0 0 5px}
.list-label li:last-child a,.archive-list li:last-child a{padding-bottom:0}
.list-label li a:hover,.archive-list li a:hover{color:$(title.hover.color)}
.list-label .label-count,.archive-list .archive-count{float:right;font-size:11px;color:$(meta.color);text-decoration:none;margin:1px 0 0 5px}
.rtl .list-label .label-count,.rtl .archive-list .archive-count{float:left;margin:1px 5px 0 0}
.cloud-label li{position:relative;float:left;margin:0 5px 5px 0}
.rtl .cloud-label li{float:right;margin:0 0 5px 5px}
.cloud-label li a{display:block;height:25px;background-color:rgba(155,155,155,0.05);color:$(meta.color);font-size:11px;line-height:23px;font-weight:400;box-sizing:border-box;padding:0 9px;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.cloud-label li a:hover{background-color:$(button.bg);color:$(button.color)}
.cloud-label .label-count{display:none}
.BlogSearch .search-form{display:flex;background-color:rgba(255,255,255,0.05);padding:2px;border:1px solid rgba(155,155,155,0.2)}
.BlogSearch .search-input{float:left;width:100%;height:32px;background-color:rgba(0,0,0,0);font-family:inherit;font-weight:400;font-size:14px;color:$(body.text.color);line-height:32px;box-sizing:border-box;padding:0 10px;margin:0;border:0;border-radius:0}
.BlogSearch .search-input:focus{outline:none}
.BlogSearch .search-action{float:right;width:auto;height:32px;font-family:inherit;font-size:14px;font-weight:600;line-height:32px;cursor:pointer;box-sizing:border-box;background-color:$(button.bg);color:$(button.color);padding:0 15px;border:0;border-bottom:2px solid rgba(0,0,0,.1)}
.BlogSearch .search-action:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.Profile ul li{float:left;width:100%;margin:20px 0 0}
.Profile ul li:first-child{margin:0}
.Profile .profile-img{float:left;width:55px;height:55px;background-color:rgba(155,155,155,0.08);overflow:hidden;color:transparent!important;margin:0 12px 0 0;border-radius:50%}
.Profile .profile-datablock{margin:0}
.Profile .profile-info > .profile-link{display:inline-block;font-size:12px;color:$(body.link.color);font-weight:400;margin:3px 0 0}
.Profile .profile-info > .profile-link:hover{color:$(title.color)}
.Profile .g-profile,.Profile .profile-data .g-profile{font-size:15px;color:$(title.color);font-weight:700;line-height:1.4em;margin:0 0 5px}
.Profile .g-profile:hover,.Profile .profile-data .g-profile:hover{color:$(title.hover.color)}
.Profile .profile-textblock{display:none}
.profile-data.location{font-size:12px;color:$(meta.color);line-height:1.4em;margin:2px 0 0}
.widget-ready .PageList ul li,.widget-ready .LinkList ul li{position:relative;display:block}
.widget-ready .PageList ul li a,.widget-ready .LinkList ul li a{display:block;color:$(title.color);font-size:13px;font-weight:400;padding:5px 0}
.widget-ready .PageList ul li:first-child a,.widget-ready .LinkList ul li:first-child a{padding:0 0 5px}
.widget-ready .PageList ul li a:hover,.widget-ready .LinkList ul li a:hover{color:$(title.hover.color)}
.Text .widget-content{font-family:var(--text-font);font-size:13px;line-height:1.5em}
.Image .image-caption{font-size:13px;line-height:1.5em;margin:10px 0 0;display:block}
.contact-form-widget form{font-family:inherit;font-weight:400}
.contact-form-name{float:left;width:100%;height:34px;background-color:rgba(255,255,255,0.05);font-family:inherit;font-size:13px;color:$(body.text.color);line-height:34px;box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
.contact-form-email{float:left;width:100%;height:34px;background-color:rgba(255,255,255,0.05);font-family:inherit;font-size:13px;color:$(body.text.color);line-height:34px;box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
.contact-form-email-message{float:left;width:100%;background-color:rgba(255,255,255,0.05);font-family:inherit;font-size:13px;color:$(body.text.color);box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgba(155,155,155,0.2);border-radius:2px}
.contact-form-button-submit{float:left;width:100%;height:34px;background-color:$(button.bg);font-family:inherit;font-size:15px;color:$(button.color);font-weight:400;line-height:33px;cursor:pointer;box-sizing:border-box;padding:0 10px;margin:0;border:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.contact-form-button-submit:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.contact-form-error-message-with-border{float:left;width:100%;background-color:rgba(0,0,0,0);font-size:12px;color:#e74c3c;text-align:left;line-height:12px;padding:3px 0;margin:10px 0;box-sizing:border-box;border:0}
.contact-form-success-message-with-border{float:left;width:100%;background-color:rgba(0,0,0,0);font-size:12px;color:#27ae60;text-align:left;line-height:12px;padding:3px 0;margin:10px 0;box-sizing:border-box;border:0}
.rtl .contact-form-error-message-with-border,.rtl .contact-form-success-message-with-border{text-align:right}
.contact-form-cross{cursor:pointer;margin:0 0 0 3px}
.rtl .contact-form-cross{margin:0 3px 0 0}
.contact-form-error-message,.contact-form-success-message{margin:0}
.contact-form-name:focus,.contact-form-email:focus,.contact-form-email-message:focus{background-color:rgba(155,155,155,0.05);border-color:rgba(155,155,155,0.4)}
.Attribution a{font-size:14px;line-height:16px;display:block}
.Attribution a > svg{width:16px;height:16px;float:left;margin:0 4px 0 0}
.Attribution .copyright{font-size:12px;color:$(meta.color);padding:0 20px;margin:3px 0 0}
#footer-wrapper{background-color:$(footer.bg);color:$(footer.text.color);border-top:1px solid rgba(155,155,155,0.2)}
#footer-wrapper .container{position:relative;margin:0 auto}
#about-section{position:relative;float:left;width:100%;padding:30px 0;margin:0}
#about-section.no-items{padding:0;border:0}
.compact-footer #about-section{border:0}
#about-section .widget{position:relative;float:left;box-sizing:border-box;margin:0}
.rtl #about-section .widget{float:right}
#about-section .widget > widget-content{display:none}
#about-section .widget-content .widget-title > h3{position:relative;font-family:var(--body-font);font-size:16px;color:$(footer.widget.title.color);font-weight:600;text-transform:uppercase;margin:0 0 15px}
.title-oswald #about-section .widget-content .widget-title > h3{font-weight:500}
#about-section .Image{width:70%;padding:0 30px 0 0}
.rtl #about-section .Image{padding:0 0 0 30px}
#about-section .Image .widget-content{position:relative;float:left;width:100%;margin:0}
#about-section .footer-logo{display:block;float:left;max-width:30%;max-height:44px;padding:19px 0;margin:0}
.rtl #about-section .footer-logo{float:right}
#about-section .footer-logo img{max-height:44px;vertical-align:middle}
#about-section .about-content{max-width:70%;display:block;float:left;padding:0 0 0 30px;box-sizing:border-box}
.rtl #about-section .about-content{float:right;padding:0 30px 0 0}
#about-section .Image .no-image .about-content{max-width:100%;padding:0 30px 0 0}
.rtl #about-section .Image .no-image .about-content{padding:0 0 0 30px}
#about-section .Image .image-caption{font-size:14px;margin:0}
#about-section .Image .image-caption a{color:$(footer.link.color)}
#about-section .Image .image-caption a:hover{color:$(footer.color)}
#about-section .LinkList{float:right;width:30%}
#about-section .LinkList .widget-content{float:right}
.rtl #about-section .LinkList,.rtl #about-section .LinkList .widget-content{float:left}
.about-section ul.social-footer{float:right}
.rtl .about-section ul.social-footer{float:left}
.about-section .social-footer li{float:left;margin:0 7px 0 0}
.rtl .about-section .social-footer li{float:right;margin:0 0 0 7px}
.about-section .social-footer li:last-child,.rtl .about-section .social-footer li:last-child{margin:0}
.about-section .social-footer li a{display:block;width:34px;height:34px;background-color:rgba(155,155,155,0.1);font-size:15px;color:$(footer.color);text-align:center;line-height:34px;box-sizing:border-box;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.about-section .social-footer li a:hover{color:#fff}
.about-section .social-footer li a.instagram:hover{border:0}
#footerbar{display:block;width:100%;height:60px;background-color:$(footerbar.bg);color:$(footerbar.color);overflow:hidden;margin:0}
#footerbar.border > .container{border-top:1px solid rgba(155,155,155,0.2)}
.compact-footer #footerbar.border > .container{border:0}
#footerbar .footer-copyright{float:left;height:30px;font-size:14px;font-weight:400;line-height:30px;margin:15px 0 0}
.rtl #footerbar .footer-copyright{float:right}
#footerbar .footer-copyright a{color:$(footerbar.color)}
#footerbar .footer-copyright a:hover{color:$(footerbar.hover.color)}
#footer-menu{
float: left;
    margin-top: -20px;
}
.rtl #footer-menu{float:left}
#footer-menu .widget > .widget-title,#footer-copyright .widget > .widget-title{display:none}
.footer-menu ul li{position:relative;float:left;margin:0}
.rtl .footer-menu ul li{float:right}
.footer-menu ul li a{float:left;height:30px;font-size:14px;color:$(footerbar.color);line-height:30px;padding:0;margin:0 0 0 20px}
.rtl .footer-menu ul li a{margin:0 20px 0 0}
#footer-menu ul li a:hover{color:$(footerbar.hover.color)}
#hidden-widgets-wrap,.hidden-widgets{display:none;visibility:hidden}
.back-top{display:none;position:fixed;bottom:15px;right:15px;width:34px;height:34px;background-color:$(button.bg);cursor:pointer;overflow:hidden;font-size:13px;color:$(button.color);text-align:center;line-height:34px;z-index:50;box-sizing:border-box;margin:0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.rtl .back-top{right:auto;left:15px}
.back-top:after{content:'\f077';position:relative;font-family:'Font Awesome 5 Free';font-weight:900}
.back-top:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.error404 #main-wrapper{width:100%}
.error404 #sidebar-wrapper{display:none}
.errorWrap{color:$(title.color);text-align:center;padding:60px 0}
.errorWrap h3{font-size:160px;line-height:1em;margin:0 0 40px}
.errorWrap h4{font-size:25px;margin:0 0 30px}
.errorWrap p{margin:0 0 15px}
.errorWrap a{display:inline-block;height:32px;background-color:$(button.bg);font-size:14px;color:$(button.color);font-weight:400;line-height:32px;padding:0 30px;margin:15px 0 0;border:1px solid rgba(0,0,0,.1);border-bottom-width:2px;border-radius:2px}
.errorWrap a:hover{background-color:$(button.hover.bg);color:$(button.hover.color)}
.cookie-choices-info{top:unset!important;bottom:0}
a.ads-here{display:block;background-color:#fff;text-align:center;font-size:14px;color:$(meta.color);font-weight:400;font-style:italic;line-height:88px;border:1px solid #ebebeb}
#main a.ads-here{background-color:rgba(155,155,155,0.05)}
.sidebar a.ads-here{line-height:265px}
.sidebar a.ads-here.ad-600{line-height:598px}
a.ads-here:hover{text-decoration:none;color:$(main.color);border-color:#ccc}
@media screen and (max-width: 1165px) {
#outer-wrapper{max-width:100%}
.row-x1{width:100%}
.headerify-wrap .headerify,.header-ad-wrap > .container,#featured-wrapper .container,#content-wrapper > .container,#footer-wrapper .container{box-sizing:border-box;padding:0 20px}
}
@media screen and (max-width: 980px) {
#main-wrapper,#sidebar-wrapper{width:100%}
#sidebar-wrapper{margin:30px 0 0}
}
@media screen and (max-width: 880px) {
.magify-main-menu{display:none}
.headerify-wrap .headerify{padding:0}
.main-logo-wrap{width:100%;text-align:center;z-index:15;margin:0}
.main-logo .header-widget,.main-logo .main-logo-img,.main-logo .blog-title{float:none;display:inline-block}
.nav-active .back-top{opacity:0!important}
.overlay,.show-mobile-menu,#slide-menu{display:block}
.nav-active .overlay{visibility:visible;opacity:1}
.search-toggle{width:auto;background-color:rgba(0,0,0,0);text-align:center;padding:0 20px}
#nav-search,.rtl #nav-search{width:unset;left:20px;right:20px;border-radius:2px 0 2px 2px}
.rtl #nav-search{border-radius:0 2px 2px 2px}
#nav-search:before{right:0}
.rtl #nav-search:before{right:unset;left:0}
}
@media screen and (max-width: 780px) {
#about-section{text-align:center}
#about-section .Image,.rtl #about-section .Image{width:100%;padding:0}
#about-section .footer-logo,.rtl #about-section .footer-logo{display:inline-block;float:none;max-width:100%;padding:0 0 30px}
#about-section .about-content,.rtl #about-section .about-content,#about-section .Image .no-image .about-content,.rtl #about-section .Image .no-image .about-content{max-width:100%;padding:0}
#about-section .LinkList,#about-section .LinkList .widget-content{width:100%}
#about-section .LinkList{margin:30px 0 0}
#about-section .LinkList .widget-content .widget-title > h3{margin:0 0 20px}
.about-section ul.social-footer,.rtl .about-section ul.social-footer{float:none;display:block;padding:0}
.about-section .social-footer li,.rtl .about-section .social-footer li{float:none;display:inline-block;margin:0 5px}
.about-section .social-footer li:last-child,.rtl .about-section .social-footer li:last-child{margin:0 5px}
#footerbar{height:auto;line-height:1.4em;padding:20px 0}
#footer-menu,#footerbar .footer-copyright{width:100%;height:unset;line-height:inherit;text-align:center;margin:0}
#footer-menu ul li,.rtl #footer-menu ul li{float:none;display:inline-block;margin:0}
#footer-menu ul li a,.rtl #footer-menu ul li a{height:unset;line-height:inherit;margin:0 7px}
#footerbar .footer-copyright .widget{float:left;width:100%;padding:0 0 15px}
}
@media screen and (max-width: 680px) {
#featured .widget,#featured .widget-content,.featured-posts{height:auto}
#featured .widget-content .loader{height:200px}
.featured-item{width:50%;height:180px;margin:2px 0 0}
.featured-item.item-0{width:100%;height:200px;margin:0}
.featured-item.item-1{width:100%;height:180px;margin:2px 0 0}
.block-posts-1 .block-item{width:100%}
.block-posts-1 .item-0{width:100%;margin:0 0 5px}
.block-posts-1 .item-1{margin:20px 0 0}
.block-posts-1 .block-inner{height:200px}
.block-posts .block-column{width:100%}
.block-videos .videos-item{width:100%;padding:0 10px;margin:20px 0 0!important}
.block-videos .videos-item.item-0{margin:0!important}
.block-videos .entry-image-link{height:160px}
.block-videos .entry-title{margin:10px 0 0}
.grid-posts-1 .grid-item{width:100%;padding:0 10px;margin:20px 0 0!important}
.grid-posts-1 .grid-item.item-0{margin:0!important}
.grid-posts-1 .entry-image-link{height:160px}
.grid-posts-1 .entry-title{margin:10px 0 0}
.related-posts .related-item{width:100%;padding:0 10px;margin:20px 0 0!important}
.related-posts .related-item.item-0{margin:0!important}
.related-posts .entry-image-link{height:160px}
.related-posts .entry-title{margin:10px 0}
.index-post .entry-image,.rtl .index-post .entry-image{width:100%;height:180px;margin:0 0 15px}
.index-post .entry-header{float:left;width:100%}
.item-post h1.entry-title{font-size:31px}
.sidebar a.ads-here,.sidebar a.ads-here.ad-600{line-height:88px}
}
@media screen and (max-width: 460px) {
.featured-item{width:100%}
.featured-item.item-0 .entry-title{font-size:20px}
.featured-item.item-1 .entry-title{font-size:14px}
.featured-item.item-1 .entry-author{display:none}
.index-post .entry-title{font-size:20px}
.index-post .entry-excerpt{font-size:13px}
.item-post h1.entry-title{font-size:29px}
.share-links li a.facebook,.share-links li a.twitter{width:36px}
.share-links li a.facebook span,.share-links li a.twitter span{display:none}
.share-links li a.facebook:before,.share-links li a.twitter:before{width:34px;background-color:rgba(0,0,0,0)}
.comments .comment-content iframe#youtube{height:180px}
}
@media screen and (max-width: 360px) {
.featured-item,.featured-item.item-1{height:140px}
.featured-item.item-0,.block-posts-1 .block-inner,.column-inner{height:180px}
.featured-item.item-0 .entry-title{font-size:16px}
.featured-item .entry-category{display:none}
.featured-item.item-0 .entry-category{display:inline-block}
.index-post .entry-image,.rtl .index-post .entry-image{height:160px}
.index-post .entry-title{font-size:18px}
.item-post h1.entry-title{font-size:21px}
.share-links li.share-icon{display:none}
.errorWrap h3{font-size:130px}
.comments .comment-content iframe#youtube{height:140px}
}
.post-body img {
max-width: 100%;
height: auto;
box-sizing: border-box;
}
.videoWrapper {
position: relative;
padding-bottom: 56.25%; /* 16:9 */
padding-top: 25px;
height: 0;
}
.videoWrapper iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}.post-body img {
max-width: 100%;
height: auto;
box-sizing: border-box;
}
div#ContactForm1 {
display: none !important;
}
.csscode {
margin : 10px 25px 10px 15px;
padding : 10px;
clear : both;
list-style-type : none;
background : #F2F7FF;
border-top : 3px solid #000000;
border-right : 3px solid #000000;
border-bottom : 3px solid #000000;
border-left : 3px solid #000000;
}
#livedownload {float:right;margin-right: 10px;}
#livedownload a {font-size: 12px; font-weight: 500; padding: 5px 8px; border: 1px solid #3a66d8; 
background: #fff; color: #3a66d8; text-align: center; border-radius: 5px;}
#livePreview a:hover {border:1px solid; background:#3a66d8; color: #fff!important;}
#livedownload a:hover {border:1px solid; background:#3a66d8; color: #fff!important;}
#livePreview2 {float:left;margin-bottom:5px;}
#livePreview2 a {font-size: 12px;color: #333; font-weight: 500; padding: 10px 15px; border: 1px solid #ddd; margin-top: 10px;border-radius:100px;text-align: center;background:#f7f7f7;}
#livedownload2 {float:right;}
#livedownload2 a {font-size: 12px; font-weight: 500; padding: 10px 15px; margin-top: 10px;color: #444; 
text-align: center; border-radius: 100px;border:1px solid #ddd;transition: all 0.3s ease-out;}
#livePreview2 a:hover {border:1px solid #ddd; background:#fff; color:transition: all 0.3s ease-out;}
#livedownload2 a:hover {border:1px solid #3a66d8;; background:#fff; color: #3a66d8!important;}
.gplay,.download{padding:12px 15px!important;color:#fff!important;font-weight:500;font-size:14px;text-
align:center;border:0;transition:all .2s ease-out;border-radius: 5px;}
.gplay {background-color:#0088cd;}
.download {background-color:#FF6D00;}
.gplay:hover {background-color:#60B8F4;color:#fff;opacity:1;}
.download:hover {background-color:#49DDAA;color:#fff;opacity:1;}
.btn li {display:flex;}
.btn{list-style: none; text-align: center; padding: 0!important; font-size: 14px; display: inline-block; 
color: #FFF!important; margin: 0 auto!important;}
.btn ul {margin:0;padding:0}
.btn li{display: inline; margin: 5px; padding: 0; list-style: none; float: left;box-shadow: 4px 4px 15px rgba(0,0,0,0.1);}
]]></b:skin>
<b:if cond='data:view.isLayoutMode'>
<b:template-skin><![CDATA[
body#layout #outer-wrapper,body#layout .row{width:auto;padding:0}
body#layout{width:910px;position:relative;background-color:#f9f9f9;padding:95px 5px 0;margin:0}
body#layout:before{content:'Magify - v1.0.0';position:absolute;top:0;left:5px;right:5px;height:95px;font-family:Roboto,sans-serif;font-size:23px;color:#1f2024;line-height:95px;text-align:center}
body#layout div.section{display:block;background-color:#f1f1f1!important;margin:0 5px 10px!important;padding:16px 16px 18px!important;border-color:#e5e5e5}
body#layout .no-items.section{display:block}
body#layout .section h4{font-size:14px;color:#1f2024;text-transform:uppercase;margin:0}
body#layout .section h4:after{text-transform:initial;color:#656565;font-weight:400}
body#layout .add_widget a{color:#3c97ef!important}
body#layout .widget-wrap3{overflow:hidden}
body#layout .widget-content{width:auto;max-width:none;max-height:none;margin:0;border:1px solid #e5e5e5;border-left:0}
body#layout .locked-widget .widget-content{border-left:1px solid #3c97ef}
body#layout .locked-widget .widget-content:hover{border-left-color:#00b140}
body#layout .widget .widget-content a.editlink{border-radius:2px}
body#layout .visibility .editlink{background:#3c97ef url(https://1.bp.blogspot.com/-iQoCOwqjB-w/Wy1bDznOM4I/AAAAAAAACGA/8BUOPStr0sk5oud9hWpHBQTrmkeJDoAvACK4BGAYYCw/s18-c/mode_edit_w600_24dp.png) no-repeat center!important}
body#layout .visibility .editlink:hover{background-color:#00b140!important}
body#layout .draggable-widget .widget-wrap2{background:#3c97ef url(https://1.bp.blogspot.com/-yTAuT5aZ1EY/Wy1eEeo4SbI/AAAAAAAACGM/FxOTPwL-Ch0_lyZxLRzhv2EWHINOmCjWACK4BGAYYCw/s22/draggable.png) no-repeat 4px 50%!important}
body#layout .draggable-widget .widget-wrap1:hover .widget-wrap2{background-color:#00b140!important}
body#layout .visibility .layout-widget-state.visible{background-image:url(https://4.bp.blogspot.com/-qicweZaCb7I/XR_IGBqqGfI/AAAAAAAABS0/MIpI_COKj6MBkeN9FEJhqL96WYnYfGjngCK4BGAYYCw/s1600/visibility_c3_600_24dp.png)!important}
body#layout .visibility .layout-widget-state.not-visible{background-image:url(https://4.bp.blogspot.com/-tqL3-mrEM7A/XR_H_P3mFZI/AAAAAAAABSs/4PO1g3CDQbse_mJYzwn-60OQoYMFcq1FQCK4BGAYYCw/s1600/visibility_off_c3_600_24dp.png)!important;opacity:1}
body#layout div.layout-widget-description{font-size:11px;line-height:1.2em}
body#layout #theme-options,body#layout #main-menu .widget{display:block!important}
body#layout div.ify-panel{background-color:#edf4ff!important;overflow:hidden!important;border-color:#cdd4ef}
body#layout .ify-panel .widget{float:left;width:49%;margin-right:2%}
body#layout .ify-panel .widget-content{border-color:#cdd4ef!important}
body#layout .ify-panel #LinkList151{margin-right:0}
body#layout .ify-panel div.layout-widget-description{display:none}
body#layout .show-mobile-menu,body#layout .search-toggle,body#layout #nav-search{display:none}
body#layout #content-wrapper{padding:0;margin:0}
body#layout .headerify > .container{display:flex}
body#layout .main-logo-wrap,body#layout .main-menu-wrap{width:50%}
body#layout #content-wrapper > .container{display:flex;margin:0}
body#layout #main-wrapper{width:67%;padding:0}
body#layout #sidebar-wrapper{width:33%;padding:0}
body#layout #custom-ads{display:block!important;display:flex!important}
body#layout #custom-ads .section{width:50%}
body#layout #ify-panel > h4:after{content:' - by www.techbeing.gq'}
body#layout .section > h4:after{font-size:12px}
body#layout #about-section{overflow:hidden!important}
body#layout #about-section .widget{float:left;width:49%;margin-right:2%}
body#layout #about-section .LinkList{margin-right:0}
body#layout #footerbar .container{display:flex}
body#layout #footer-menu,body#layout #footer-copyright{width:50%}
body#layout #main-logo > h4:after{content:' - Recommended Height (34px)'}
body#layout #magify-main-menu > h4:after{content:' - With Sub Links and MegaMenu'}
body#layout #header-ad > h4:after{content:' - on HomePage and Post Page'}
body#layout #featured > h4:after{content:' - Recent or Label by (Shortcode)'}
body#layout #block-posts-1 > h4:after{content:' - Drag &  Drop Post Widgets by (Shortcode)'}
body#layout #home-ads-1 > h4:after{content:' - Before Main Posts on HomePage'}
body#layout #main > h4:after{content:' - Default Blog Posts'}
body#layout #main-before-ad > h4:after{content:' - Before Post Content'}
body#layout #main-after-ad > h4:after{content:' - After Post Content'}
body#layout #home-ads-2 > h4:after{content:' - After Main Posts on HomePage'}
body#layout #block-posts-2 > h4:after{content:' - Drag &  Drop Post Widgets by (Shortcodes)'}
body#layout #social-counter > h4:after{content:' - Social Icons'}
body#layout #sidebar > h4:after{content:' - on All Pages'}
body#layout #sidebar-ads > h4:after{content:' - on Post Page'}
body#layout #about-section > h4:after{content:' - Site Logo, Description and Social Links'}
body#layout #footer-copyright > h4:after{content:' - Custom Credits'}
body#layout #footer-menu > h4:after{content:' - Footer Links'}
body#layout:after{content:'Design by www.techbeing.gq';display:block;font-family:Roboto,sans-serif;font-size:14px;color:#555;line-height:1;text-align:center;visibility:visible;padding:20px 0}

]]></b:template-skin>
</b:if>
<!-- Global Variables -->
<script defer='defer' type='text/javascript'>
//<![CDATA[
    // Global variables with content. "Available for Edit"
    var monthFormat = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        fixedMenu = false,
        fixedSidebar = false,
        relatedPostsNum = 3,
        commentsSystem = "blogger",
        disqusShortname = "techbeing-theme",
        showMoreText = "",
        followByEmailText = "";
//]]>
</script>
<b:if cond='data:blog.languageDirection == &quot;rtl&quot;'>
<!-- Global Variables (RTL) -->
<script type='text/javascript'>
//<![CDATA[
    var monthFormat = ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "سبتمبر", "واكتوبر", "نونبر", "ديسمبر"];
//]]>
</script>
</b:if>
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='widget-title'>
      <b:if cond='data:title == &quot;no-style&quot;'>
        <b:class name='no-style'/>
        <b:elseif cond='data:widget.type == &quot;AdSense&quot;'/>
        <b:class name='no-style'/>
      </b:if>
      <b:if cond='data:defaultTitle or data:title'>
        <div class='widget-title'>
          <b:class cond='data:widget.sectionId in [&quot;block-posts-1&quot;, &quot;block-posts-2&quot;]' name='title-wrap'/>
          <h3 class='title'><data:title/></h3>
        </div>
      </b:if>
    </b:includable>  
    <b:includable id='theme-head'>
      <meta expr:content='&quot;text/html; charset=&quot; + data:blog.encoding' http-equiv='Content-Type'/>
      <meta content='blogger' name='generator'/>
      <link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
      <meta expr:content='data:skin.vars.keycolor' name='theme-color'/>
      <meta expr:content='data:skin.vars.keycolor' name='msapplication-navbutton-color'/>
      <b:if cond='data:blog.adultContent'>
        <meta content='adult' name='rating'/>
      </b:if>
      <link expr:href='data:view.url.canonical' rel='canonical'/>
      <data:blog.feedLinks/><data:blog.meTag/>
      <meta expr:content='data:view.description.escaped' name='description'/>
      <b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:href='data:widgets.Blog.first.posts[0].featuredImage' name='link' rel='image_src'/>
      <b:tag cond='data:view.isSingleItem and data:view.featuredImage' expr:href='data:view.featuredImage' name='link' rel='image_src'/>
      <b:include name='customOpenGraphMetaData'/>
    </b:includable>
    <b:includable id='customOpenGraphMetaData'>
      <!-- Metadata for Open Graph protocol. See http://ogp.me/. -->
      <b:if cond='data:view.isHomepage'>
        <meta content='website' property='og:type'/>
      </b:if>
      <b:if cond='data:view.isSingleItem'>
        <meta content='article' property='og:type'/>
      </b:if>
      <b:if cond='data:view.isMultipleItems and not data:view.isHomepage'>
        <meta content='object' property='og:type'/>
      </b:if>    
      <meta expr:content='data:view.title.escaped' property='og:title'/>
      <meta expr:content='data:blog.url.canonical' property='og:url'/>
      <meta expr:content='data:view.description.escaped' property='og:description'/>
      <meta expr:content='data:blog.title.escaped' property='og:site_name'/>
      <b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:content='data:widgets.Blog.first.posts[0].featuredImage' name='meta' property='og:image'/>
      <b:if cond='data:view.featuredImage'>
        <meta expr:content='data:view.featuredImage' property='og:image'/>
        <meta expr:content='data:view.featuredImage' name='twitter:image'/>
      </b:if>
      <meta content='summary_large_image' name='twitter:card'/>
      <meta expr:content='data:view.title.escaped' name='twitter:title'/>
      <meta expr:content='data:blog.url.canonical' name='twitter:domain'/>
      <meta expr:content='data:view.description.escaped' name='twitter:description'/>
      <b:if cond='data:view.isHomepage'>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;<data:view.title.escaped/>&quot;,&quot;url&quot;:&quot;<data:view.url.canonical/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:view.url.canonical/>search?q={search_term_string}&quot;,&quot;query-input&quot;:&quot;required name=search_term_string&quot;}}</script>
      </b:if>
    </b:includable>
    <b:includable id='translate'>
      <b:switch var='data:blog.locale.language'>
        <b:case value='en'/><b:include name='customLang'/>
        <b:default/><b:include name='customLang'/>
      </b:switch>
    </b:includable> 
    <b:includable id='customLang'>
      <b:switch var='data:message'>
        <b:case value='prevPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Previous Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Artículo Anterior<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Postagem Anterior<b:else/><data:messages.newer/></b:if>
        <b:case value='nextPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Next Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Artículo Siguiente<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Próxima Postagem<b:else/><data:messages.older/></b:if>
<b:case value='followByEmailText'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Get all latest content delivered straight to your inbox.<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Obtener todo el contenido más reciente directamente en su correo electrónico.<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Obtenha todo o conteúdo mais recente diretamente na sua caixa de entrada.<b:else/><data:messages.getEmailNotifications/></b:if>
<b:case value='loadMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Load More<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Carga Más<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Carregar Mais<b:else/><data:messages.loadMorePosts/></b:if>
<b:case value='noMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>That is All<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Eso es Todo<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Isso é Tudo<b:else/><data:messages.noResultsFound/></b:if>
      </b:switch>
    </b:includable>
    <b:includable id='layout-js-options'>
      <b:if cond='data:skin.vars.fixedmenu == &quot;1px&quot;'>
        <script defer='defer' type='text/javascript'>
          var fixedMenu = true;     
        </script>
      </b:if>
      <b:if cond='data:skin.vars.fixedsidebar == &quot;1px&quot;'>
        <script defer='defer' type='text/javascript'>
          var fixedSidebar = true;     
        </script>
      </b:if>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Header'>
    <b:includable id='main' var='this'>
      <div class='header-widget'>
        <b:class cond='data:view.search.label' name='in-label'/>
        <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
        <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
        <b:include cond='data:widget.sectionId == &quot;main-logo&quot;' name='logo-label'/>
      </div>
    </b:includable>
    <b:includable id='image'>
      <a class='main-logo-img' expr:href='data:blog.homepageUrl'>
        <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image'/>
        <b:if cond='data:view.isHomepage'><b:if cond='data:widget.sectionId == &quot;main-logo&quot;'><h1 id='h1-tag'><data:title/></h1></b:if></b:if>
      </a>
    </b:includable>
    <b:includable id='title'>
      <h1 class='blog-title'>
        <b:tag expr:href='data:blog.homepageUrl' name='a'>
          <data:title/>
        </b:tag>
      </h1>
    </b:includable>
    <b:includable id='logo-label'>
      <b:if cond='data:view.search.label'><h2 class='blog-title'><b:tag expr:href='data:blog.homepageUrl' name='a'><data:view.search.label/></b:tag></h2></b:if> 
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='PopularPosts'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:tag class='trending-posts' cond='data:widget.sectionId == &quot;trending&quot;' name='div'>
          <b:if cond='data:widget.sectionId == &quot;trending&quot;'>
            <b:class cond='data:posts.length != &quot;1&quot;' name='multiple'/>
          </b:if>
          <b:tag class='featured-posts' cond='data:widget.sectionId == &quot;featured&quot;' name='div'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include data='post' name='content'/>
            </b:loop>
          </b:tag>
        </b:tag>
      </div>
    </b:includable>
    <b:includable id='content' var='post'>
      <b:include data='post' name='default'/>
    </b:includable>
    <b:includable id='default' var='post'>
      <article class='popular-post post'>
        <b:class expr:name='&quot;item-&quot;+data:i'/>
        <b:if cond='data:post.featuredImage'>
          <b:if cond='data:post.featuredImage.isYouTube'>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='data:post.featuredImage'/>
            </a>
            <b:else/>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/>
            </a>
          </b:if>
          <b:else/>
          <a class='entry-image-link' expr:href='data:post.url'>
            <span class='entry-thumb' data-image='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'/>
          </a>
        </b:if>
        <div class='entry-header'>
          <h2 class='entry-title'>
            <a expr:href='data:post.url'><data:post.title/></a>
          </h2>
          <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='entry-meta'><span class='entry-time'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
      </article>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='FeaturedPost'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='content'/>
        </b:loop>
      </div>
    </b:includable>
    <b:includable id='content' var='post'>
      <article class='post'>
        <b:if cond='data:post.featuredImage'>
          <b:if cond='data:post.featuredImage.isYouTube'>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='data:post.featuredImage'/>
            </a>
            <b:else/>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/>
            </a>
          </b:if>
          <b:else/>
          <a class='entry-image-link' expr:href='data:post.url'>
            <span class='entry-thumb' data-image='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'/>
          </a>
        </b:if>
        <div class='entry-header'>
          <h2 class='entry-title'>
            <a expr:href='data:post.url'><data:post.title/></a>
          </h2>
          <b:if cond='data:widgets.Blog.first.allBylineItems.author or data:widgets.Blog.first.allBylineItems.timestamp'>
            <div class='entry-meta'>
              <b:if cond='data:widgets.Blog.first.allBylineItems.author'><span class='entry-author'><data:post.author.name/></span></b:if><b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><span class='entry-time'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
           </b:if>
            </div>
          </b:if>
        </div>
      </article>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='ContactForm'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content contact-form-widget'>
        <div class='form'>
          <form name='contact-form'>
            <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
            <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg + &quot;*&quot;' name='email' size='30' type='text' value=''/>
            <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg + &quot;*&quot;' name='email-message' rows='5'/>
            <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
            <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
            <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
          </form>
        </div>
      </div>
    </b:includable>       
  </b:defaultmarkup>
  <b:defaultmarkup type='Label'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <b:class expr:name='data:this.display + &quot;-label&quot;'/>
        <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
        <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
      </div>
    </b:includable>
    <b:includable id='list'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/><b:if cond='data:this.showFreqNumbers'><span class='label-count'>(<data:label.count/>)</span></b:if>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
    <b:includable id='cloud'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='FollowByEmail'>
    <b:includable id='main' var='this'>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <div class='widget-content-inner'>
          <div class='follow-by-email-content'>
            <h3 class='follow-by-email-title'>
              <data:title/>
            </h3>
            <p class='follow-by-email-text excerpt'><b:include data='{ message: &quot;followByEmailText&quot; }' name='translate'/></p>
            <div class='follow-by-email-inner'>
              <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
                <input autocomplete='off' class='follow-by-email-address' expr:placeholder='data:messages.emailAddress' name='email' type='email'/>
                <input class='follow-by-email-submit' expr:value='data:messages.subscribe' type='submit'/>
                <input expr:value='data:feedPath' name='uri' type='hidden'/>
                <input name='loc' type='hidden' value='en_US'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </b:includable>
  </b:defaultmarkup> 
  <b:defaultmarkup type='Image'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <div class='custom-image'>
          <b:tag cond='data:link' expr:href='data:link' name='a'>
            <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl'/>
          </b:tag>
        </div>
        <b:if cond='data:caption'>
          <span class='image-caption excerpt'><data:caption/></span>
        </b:if>
      </div>
    </b:includable>
  </b:defaultmarkup> 
  <b:defaultmarkup type='BlogArchive'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <b:class name='archive-list'/>
        <b:include cond='data:this.style in {&quot;FLAT&quot;, &quot;MENU&quot;, &quot;HIERARCHY&quot;}' name='flat'/>
      </div>
    </b:includable>
    <b:includable id='flat'>
      <ul>
        <b:loop values='data:data' var='i'>
          <li>
            <a class='archive-name' expr:href='data:i.url'>
              <data:i.name/><span class='archive-count'>(<data:i.post-count/>)</span>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogSearch'>
    <b:includable id='main'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content' role='search'>
        <b:include name='searchForm'/>
      </div>
    </b:includable>
    <b:includable id='searchForm'>
      <form class='search-form' expr:action='data:blog.searchUrl'>
        <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
        <b:include name='urlParamsAsFormInput'/>
        <input autocomplete='off' class='search-input' expr:aria-label='data:messages.search' expr:placeholder='data:messages.search' name='q' value=''/>
        <b:include name='searchSubmit'/>
      </form>
    </b:includable>
    <b:includable id='searchSubmit'>
      <input class='search-action' expr:value='data:messages.ok.escaped' type='submit'/>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Profile'>
    <b:includable id='userProfileImage'>
      <a expr:href='data:userUrl' rel='nofollow' target='_blank'>
        <b:include name='profileImage'/>
      </a>
    </b:includable>
    <b:includable id='teamProfileLink'>
      <a class='profile-link g-profile' expr:href='data:userUrl' rel='nofollow' target='_blank'>
        <b:include name='profileImage'/>
        <span class='profile-name'><data:display-name/></span>
      </a>
    </b:includable>
    <b:includable id='userProfileLink'>
      <a class='profile-link g-profile' expr:href='data:userUrl' rel='author nofollow' target='_blank'>
        <data:displayname/>
      </a>
    </b:includable>
    <b:includable id='viewProfileLink'>
      <a class='profile-link' expr:href='data:userUrl' rel='author nofollow' target='_blank'>
        <data:messages.viewMyCompleteProfile/>
      </a>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<b:if cond='data:widgets.AdSense.first or data:blog.adsenseClientId'>
  <!-- Google AdSense -->
  <script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
</b:if>
<!-- Google Analytics -->
<b:include data='blog' name='google-analytics'/>
<b:if cond='data:widgets any w =&gt; w.sectionId in [&quot;block-posts-1&quot;, &quot;block-posts-2&quot;]'>
<!-- Block-Posts Custom Styles -->
  <b:tag id='page-skin-2' name='style' type='text/css'/>
</b:if>
</head>
  <body expr:class='data:blog.pageType'>
  <b:class cond='data:view.isHomepage' name='home'/>
  <b:class cond='data:view.isPost' name='post'/>
  <b:class cond='data:view.isPage' name='item page'/>
  <b:class cond='data:view.isArchive' name='index'/>
  <b:class cond='data:view.search.label' name='category'/>
  <b:class cond='data:view.isError' name='item error404'/>
  <b:class cond='data:skin.vars.showborder == &quot;0px&quot;' name='nb-style'/>
  <b:class cond='data:skin.vars.sidebar == &quot;1px&quot;' name='left-sidebar'/>
  <b:class cond='data:skin.vars.main_font_family == &quot;Oswald&quot;' name='main-oswald'/>
  <b:class cond='data:skin.vars.title_font_family == &quot;Oswald&quot;' name='title-oswald'/>
<!-- Theme Options -->
  <div id='theme-options' style='display:none'>
    <b:section class='ify-panel' id='ify-panel' maxwidgets='3' name='Theme Options' showaddelement='no'>
      <b:widget id='HTML150' locked='true' title='Facebook SDK' type='HTML' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'/>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          <div class='widget-content'>
            <data:content/>
          </div>
        </b:includable>
      </b:widget>
      <b:widget id='LinkList151' locked='true' title='Default Variables' type='LinkList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='text-0'>showMoreText</b:widget-setting>
          <b:widget-setting name='link-0'>View More</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          &lt;script defer=&#39;defer&#39; type=&#39;text/javascript&#39;&gt;
          //&lt;![CDATA[
          <b:loop values='data:links' var='link'>
            <b:if cond='data:link.name == &quot;monthFormat&quot;'>
              var monthFormat = [<data:link.target/>];
            </b:if>
            <b:if cond='data:link.name == &quot;relatedPostsNum&quot;'>
              var relatedPostsNum = <data:link.target/>;
            </b:if>
            <b:if cond='data:link.name == &quot;showMoreText&quot;'>
              var showMoreText = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;followByEmailText&quot;'>
              var followByEmailText = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;commentsSystem&quot;'>
              var commentsSystem = &quot;<data:link.target/>&quot;;
            </b:if>
            <b:if cond='data:link.name == &quot;disqusShortname&quot;'>
              var disqusShortname = &quot;<data:link.target/>&quot;;
            </b:if>
          </b:loop>
          //]]&gt;
          &lt;/script&gt;
        </b:includable>
      </b:widget>
    </b:section>
  </div>
<!-- Outer Wrapper -->
<div id='outer-wrapper'>
<b:class cond='data:skin.vars.boxed == &quot;1px&quot;' name='boxed'/>
  <!-- Header Wrapper -->
  <header id='header-wrapper'>
    <!-- Headerify -->
    <div class='headerify-wrap'>
      <div class='headerify'>
        <div class='container row-x1'>
          <a class='show-mobile-menu' href='javascript:;'/>
          <div class='main-logo-wrap'>
            <b:section class='main-logo' id='main-logo' maxwidgets='1' name='Main Logo' showaddelement='no'>
              <b:widget id='Header1' locked='true' title='Tech Being (Header)' type='Header' version='2' visible='true'>
                <b:widget-settings>
                  <b:widget-setting name='displayUrl'><![CDATA[https://cdn.statically.io/img/3.bp.blogspot.com/-UKjKZtq0CmM/X1sy52Oe8OI/AAAAAAAAPfE/s_oodE8feQIaikSY19U4zwjVbjjyCA3JgCK4BGAYYCw/s1600/TechBeing._.png?w=174&h=44&f=auto]]></b:widget-setting>
                  <b:widget-setting name='displayHeight'>405</b:widget-setting>
                  <b:widget-setting name='sectionWidth'>150</b:widget-setting>
                  <b:widget-setting name='useImage'>true</b:widget-setting>
                  <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                  <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
                  <b:widget-setting name='displayWidth'>1600</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main' var='this'>
                  <div class='header-widget'>
                    <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
                    <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
                  </div>
                </b:includable>
                <b:includable id='behindImageStyle'>
                  <b:if cond='data:sourceUrl'>
                    <b:include cond='data:this.image' data='{                    image: data:this.image,                    selector: &quot;.header-widget&quot;                  }' name='responsiveImageStyle'/>
                    <style type='text/css'>
                      .header-widget {
                        background-position: <data:blog.locale.languageAlignment/>;
                        background-repeat: no-repeat;
                      }
                    </style>
                  </b:if>
                </b:includable>
                <b:includable id='description'>
                  <p>
                    <data:this.description/>
                  </p>
                </b:includable>
                <b:includable id='image'>
                  <a class='main-logo-img' expr:href='data:blog.homepageUrl'>
                    <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image'/>
                    <b:if cond='data:view.isHomepage'><b:if cond='data:widget.sectionId == &quot;main-logo&quot;'><h1 id='h1-tag'><data:title/></h1></b:if></b:if>
                  </a>
                </b:includable>
                <b:includable id='logo-label'>
      <b:if cond='data:view.search.label'><h2 class='blog-title'><b:tag expr:href='data:blog.homepageUrl' name='a'><data:view.search.label/></b:tag></h2></b:if> 
    </b:includable>
                <b:includable id='title'>
                  <h1 class='blog-title'>
                    <b:tag expr:href='data:blog.homepageUrl' name='a'>
                      <data:title/>
                    </b:tag>
                  </h1>
                </b:includable>
              </b:widget>
            </b:section>
          </div>
          <nav class='main-menu-wrap'>
            <b:section class='magify-main-menu' id='magify-main-menu' maxwidgets='1' name='Main Menu' showaddelement='no'>
              <b:widget id='LinkList155' locked='true' title='Main Menu' type='LinkList' version='2' visible='true'>
                <b:widget-settings>
                  <b:widget-setting name='text-10'>More</b:widget-setting>
                  <b:widget-setting name='sorting'>NONE</b:widget-setting>
                  <b:widget-setting name='link-1'>{getMega} $label={Blogger}</b:widget-setting>
                  <b:widget-setting name='link-13'>/</b:widget-setting>
                  <b:widget-setting name='link-2'>/search/label/WordPress</b:widget-setting>
                  <b:widget-setting name='link-12'>/p/contact-us.html</b:widget-setting>
                  <b:widget-setting name='link-15'>/</b:widget-setting>
                  <b:widget-setting name='link-0'>/</b:widget-setting>
                  <b:widget-setting name='link-14'>/</b:widget-setting>
                  <b:widget-setting name='link-11'>/</b:widget-setting>
                  <b:widget-setting name='link-10'>/</b:widget-setting>
                  <b:widget-setting name='text-9'>_Hosting Review</b:widget-setting>
                  <b:widget-setting name='link-9'>/</b:widget-setting>
                  <b:widget-setting name='text-8'>_Ad Network Review</b:widget-setting>
                  <b:widget-setting name='link-7'>/</b:widget-setting>
                  <b:widget-setting name='link-8'>/</b:widget-setting>
                  <b:widget-setting name='link-5'>/search/label/PHP</b:widget-setting>
                  <b:widget-setting name='link-6'>/</b:widget-setting>
                  <b:widget-setting name='link-3'>/search/label/Adsense</b:widget-setting>
                  <b:widget-setting name='link-4'>/search/label/SEO</b:widget-setting>
                  <b:widget-setting name='text-1'>Blogger</b:widget-setting>
                  <b:widget-setting name='text-0'>Home</b:widget-setting>
                  <b:widget-setting name='text-3'>Adsense</b:widget-setting>
                  <b:widget-setting name='text-2'>WordPress</b:widget-setting>
                  <b:widget-setting name='text-5'>PHP</b:widget-setting>
                  <b:widget-setting name='text-4'>SEO</b:widget-setting>
                  <b:widget-setting name='text-7'>Review</b:widget-setting>
                  <b:widget-setting name='text-6'>Make Money</b:widget-setting>
                  <b:widget-setting name='text-15'>_Privacy Policy</b:widget-setting>
                  <b:widget-setting name='text-11'>_About</b:widget-setting>
                  <b:widget-setting name='text-12'>_Contact</b:widget-setting>
                  <b:widget-setting name='text-13'>_Disclaimer</b:widget-setting>
                  <b:widget-setting name='text-14'><![CDATA[_Terms &amp; Conditions]]></b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
                  <b:include name='content'/>
                </b:includable>
                <b:includable id='content'>
                  <ul id='magify-main-menu-nav' role='menubar'>
                    <b:loop values='data:links' var='link'>
                      <li><a expr:href='data:link.target' role='menuitem'><data:link.name/></a></li>
                    </b:loop>
                  </ul>
                </b:includable>
              </b:widget>
            </b:section>
          </nav>
          <a class='search-toggle' href='javascript:;'/>
          <div id='nav-search'>
            <form class='search-form' expr:action='data:blog.searchUrl' role='search'>
              <input autocomplete='off' class='search-input' expr:placeholder='data:messages.search' name='q' type='search' value=''/>
              <input class='search-action' expr:value='data:messages.ok.escaped' type='submit'/>
            </form>
          </div>
        </div>
      </div>    
    </div>
  </header>
  <b:if cond='data:view.isHomepage or data:view.isPost'>
    <!-- Header Ads -->
    <div class='header-ad-wrap multiple'>
      <b:section class='header-ad container row-x1' id='header-ad' maxwidgets='1' name='Header ADS' showaddelement='yes'>
        <b:widget id='HTML8' locked='false' title='' type='HTML' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>
  <b:if cond='data:view.isHomepage'>
    <!-- Featured Wrapper -->
    <div id='featured-wrapper'>
      <b:section class='featured container row-x1' id='featured' maxwidgets='1' name='Featured Posts' showaddelement='yes'>
        <b:widget id='HTML3' locked='false' title='Featured Posts' type='HTML' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='content'>{getFeatured} $label={recent}</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
            <b:include name='widget-title'/>
            <div class='widget-content'>
              <data:content/>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>
  <!-- Content Wrapper -->
  <div id='content-wrapper'>
    <div class='container row-x1'>
      <!-- Main Wrapper -->
      <main id='main-wrapper'>
        <b:section class='block-posts' cond='data:view.isHomepage' id='block-posts-1' name='Post Widgets 1' showaddelement='yes'>
          <b:widget id='HTML1' locked='false' title='Blogger Tips &amp;amp; Tricks' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getBlock} $results={6} $label={Blogger} $type={grid1} $color={#1abc9c}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML4' locked='false' title='Premium Blogger Templates' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getBlock} $results={6} $label={Blogger Templates} $type={grid1} $color={#1abc9c}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML5' locked='false' title='PHP Tips &amp;amp; Tricks' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getBlock} $results={6} $label={PHP} $type={grid1} $color={#1abc9c}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
        </b:section>
        <b:section class='home-ad' cond='data:view.isHomepage' id='home-ads-1' maxwidgets='1' name='Home ADS 1' showaddelement='yes'>
          <b:widget id='HTML11' locked='false' title='' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='HTML9' locked='false' title='' type='HTML' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
        </b:section>
        <b:section class='main' id='main' maxwidgets='1' name='Main Posts' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='commentLabel'>Post a Comment</b:widget-setting>
              <b:widget-setting name='showShareButtons'>true</b:widget-setting>
              <b:widget-setting name='authorLabel'>by</b:widget-setting>
              <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
              <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              <b:widget-setting name='timestampLabel'>-</b:widget-setting>
              <b:widget-setting name='reactionsLabel'>Post Navi</b:widget-setting>
              <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
              <b:widget-setting name='style.layout'>1x1</b:widget-setting>
              <b:widget-setting name='showLocation'>false</b:widget-setting>
              <b:widget-setting name='showTimestamp'>true</b:widget-setting>
              <b:widget-setting name='postsPerAd'>1</b:widget-setting>
              <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='backlinksLabel'>You might like</b:widget-setting>
              <b:widget-setting name='showDateHeader'>false</b:widget-setting>
              <b:widget-setting name='style.textcolor'>#171c24</b:widget-setting>
              <b:widget-setting name='showCommentLink'>true</b:widget-setting>
              <b:widget-setting name='style.urlcolor'>#aaaaaa</b:widget-setting>
              <b:widget-setting name='showAuthor'>true</b:widget-setting>
              <b:widget-setting name='style.linkcolor'>#ff3d00</b:widget-setting>
              <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='showLabels'>true</b:widget-setting>
              <b:widget-setting name='postLabelsLabel'>Tags</b:widget-setting>
              <b:widget-setting name='showBacklinks'>true</b:widget-setting>
              <b:widget-setting name='showInlineAds'>false</b:widget-setting>
              <b:widget-setting name='showReactions'>true</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
              <b:include name='searchMessage'/>
              <b:include cond='data:view.isHomepage' name='blogPostsTitle'/>
              <div class='blog-posts hfeed container'>
                <b:class cond='data:view.isMultipleItems' name='index-post-wrap'/>
                <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
                <b:loop index='i' values='data:posts' var='post'>
                  <b:include data='post' name='postCommentsAndAd'/>
                </b:loop>
              </div>
              <b:include cond='data:view.isMultipleItems' name='postPagination'/>
              <b:include name='feedLinks'/>
              <b:include name='jsMessages'/>
            </b:includable>
            <b:includable id='aboutPostAuthor'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='addComments'>
              <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
                <b:message name='messages.postAComment'/>
              </a>
            </b:includable>
            <b:includable id='backLinks' var='post'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='blogPostsTitle'>
              <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
                <div class='blog-posts-title title-wrap'><h3 class='title'><data:blog.jumpLinkMessage/></h3><a class='more' href='/search'><data:messages.showMore/></a></div>
              </b:if>
            </b:includable>
            <b:includable id='commentAuthorAvatar'>
              <div class='avatar-image-container'>
                <img class='author-avatar' expr:src='data:comment.authorAvatarSrc' height='35' width='35'/>
              </div>
            </b:includable>
            <b:includable id='commentDeleteIcon' var='comment'>
              <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                <b:if cond='data:showCmtPopup'>
                  <div class='goog-toggle-button'>
                    <div class='goog-inline-block comment-action-icon'/>
                  </div>
                  <b:else/>
                  <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
                    <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
                  </a>
                </b:if>
              </span>
            </b:includable>
            <b:includable id='commentForm' var='post'>
              <div class='comment-form'>
                <a name='comment-form'/>
                <h4 id='comment-post-message'><data:messages.postAComment/></h4>
                <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                  <p><data:this.messages.blogComment/></p>
                </b:if>
                <b:include data='post' name='commentFormIframeSrc'/>
                <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                <data:post.cmtfpIframe/>
                <script type='text/javascript'>
                  BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                </script>
              </div>
            </b:includable>
            <b:includable id='commentFormIframeSrc' var='post'>
              <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
            </b:includable>
            <b:includable id='commentItem' var='comment'>
              <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
                <b:include cond='data:blog.enabledCommentProfileImages' name='commentAuthorAvatar'/>
                <div class='comment-block'>
                  <div class='comment-author'>
                    <b:if cond='data:comment.authorUrl'>
                      <b:message name='messages.authorSaidWithLink'>
                        <b:param expr:value='data:comment.author' name='authorName'/>
                        <b:param expr:value='data:comment.authorUrl' name='authorUrl'/>
                      </b:message>
                      <b:else/>
                      <b:message name='messages.authorSaid'>
                        <b:param expr:value='data:comment.author' name='authorName'/>
                      </b:message>
                    </b:if>
                  </div>
                  <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'>
                    <data:comment.body/>
                  </div>
                  <div class='comment-footer'>
                    <span class='comment-timestamp'>
                      <a expr:href='data:comment.url' title='comment permalink'>
                        <data:comment.timestamp/>
                      </a>
                      <b:include data='comment' name='commentDeleteIcon'/>
                    </span>
                  </div>
                </div>
              </div>
            </b:includable>
            <b:includable id='commentList' var='comments'>
              <div id='comments-block'>
                <b:loop values='data:comments' var='comment'>
                  <b:include data='comment' name='commentItem'/>
                </b:loop>
              </div>
            </b:includable>
            <b:includable id='commentPicker' var='post'>
              <b:if cond='data:post.commentSource == 1'>
                <b:include data='post' name='iframeComments'/>
                <b:elseif cond='data:post.showThreadedComments'/>
                <b:include data='post' name='threadedComments'/>
                <b:else/>
                <b:include data='post' name='comments'/>
              </b:if>
            </b:includable>
            <b:includable id='comments' var='post'>
              <section expr:class='&quot;comments&quot; + (data:post.embedCommentForm ? &quot; embed&quot; : &quot;&quot;)' expr:data-num-comments='data:post.numberOfComments' id='comments'>
                <b:class cond='data:post.numberOfComments == &quot;0&quot;' name='no-comments'/>
                <a name='comments'/>
                <b:if cond='data:post.allowComments'>
                  <b:include name='commentsTitle'/>
                  <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                    <b:include cond='data:post.comments' data='post.comments' name='commentList'/>
                  </div>
                  <b:if cond='data:post.commentPagingRequired'>
                    <div class='paging-control-container'>
                      <b:if cond='data:post.hasOlderLinks'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                          <data:messages.oldest/>
                        </a>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                          <data:messages.older/>
                        </a>
                      </b:if>
                      <span class='comment-range-text'>
                        <data:post.commentRangeText/>
                      </span>
                      <b:if cond='data:post.hasNewerLinks'>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                          <data:messages.newer/>
                        </a>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                          <data:messages.newest/>
                        </a>
                      </b:if>
                    </div>
                  </b:if>
                  <div class='footer'>
                    <b:if cond='data:post.embedCommentForm'>
                      <b:if cond='data:post.allowNewComments'>
                        <b:include data='post' name='commentForm'/>
                        <b:else/>
                        <data:post.noNewCommentsText/>
                      </b:if>
                      <b:else/>
                      <b:if cond='data:post.allowComments'>
                        <b:include data='post' name='addComments'/>
                      </b:if>
                    </b:if>
                  </div>
                </b:if>
                <b:if cond='data:showCmtPopup'>
                  <div id='comment-popup'>
                    <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                    </iframe>
                  </div>
                </b:if>
              </section>
            </b:includable>
            <b:includable id='commentsTitle'>
              <!-- Post Commments Title -->
              <b:if cond='data:post.numberOfComments == 0'>
                <div class='title-wrap comments-title'><h3 class='title'><data:allBylineItems.comments.label/></h3><b:class cond='data:this.messages.blogComment != &quot;&quot;' name='has-message'/></div>
                <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                  <p class='comments-message excerpt'><data:this.messages.blogComment/></p>
                </b:if>
                <b:else/>
                <div class='title-wrap comments-title'><h3 class='title'><data:post.numberOfComments/> <data:messages.comments/></h3><b:class cond='data:this.messages.blogComment != &quot;&quot;' name='has-message'/></div>
                <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                  <p class='comments-message excerpt'><data:this.messages.blogComment/></p>
                </b:if>
              </b:if>
            </b:includable>
            <b:includable id='feedLinks'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='feedLinksBody' var='links'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='headerByline' var='post'>
              <!-- Post Header Meta -->
              <b:if cond='data:view.isMultipleItems'>
                <b:if cond='data:allBylineItems.author or data:allBylineItems.timestamp'>
                  <div class='entry-meta'>
                    <b:include cond='data:allBylineItems.author' data='post' name='postAuthor'/>
                    <b:include cond='data:allBylineItems.timestamp' data='post' name='postTimestamp'/>
                  </div>
                </b:if>
              </b:if>
              <b:if cond='data:view.isPost'>
                <b:if cond='data:allBylineItems.author or data:allBylineItems.timestamp or data:allBylineItems.comments'>
                  <b:class name='has-meta'/>
                  <div class='entry-meta'>
                    <b:include cond='data:allBylineItems.author' data='post' name='postAuthor'/>
                    <b:include cond='data:allBylineItems.timestamp' data='post' name='postTimestamp'/>
                    <b:include cond='data:allBylineItems.comments' data='post' name='postReplyCount'/>
                  </div>
                </b:if>
              </b:if>
            </b:includable>
            <b:includable id='homePageLink'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='iframeComments' var='post'>
              <b:if cond='data:post.allowIframeComments'>
                <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
                <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>
                <b:if cond='!data:post.embedCommentForm'>
                  <b:include data='post' name='commentsLink'/>
                </b:if>
              </b:if>
            </b:includable>
            <b:includable id='indexPost' var='post'>
              <!-- Index Post Content -->
              <b:include data='post' name='postMeta'/>
              <b:include data='post' name='postFeaturedImage'/>
              <div class='entry-header'>
                <b:include data='post' name='postHeader'/>
                <b:include data='post' name='headerByline'/>
                <b:include data='post' name='postSummary'/>
              </div>
            </b:includable>
            <b:includable id='inlineAd' var='post'>
              <b:if cond='!data:view.isPreview'>
                <b:if cond='data:i != 0'>
                  <b:if cond='data:post.includeAd and data:post.adNumber'>
                    <b:if cond='data:this.adCode or data:this.adClientId or data:blog.adsenseClientId'>
                      <div expr:class='&quot;index-post post-ad-type post-ad-&quot; + data:i'>
                        <div class='inline-ad-wrap'>
                          <div class='inline-ad'>
                            <b:if cond='data:this.adCode != &quot;&quot;'>
                              <data:this.adCode/>
                              <b:else/>
                              <b:if cond='data:this.adClientId or data:blog.adsenseClientId'>
                                <ins class='adsbygoogle' data-ad-format='fluid' data-ad-layout-key='-fp-6o+cy+73-sm' data-full-width-responsive='false' expr:data-ad-client='data:adClientId ?: data:blog.adsenseClientId' expr:data-ad-host='data:blog.adsenseHostId' expr:data-analytics-uacct='data:blog.analyticsAccountNumber' expr:style='data:style ?: &quot;display: block;&quot;' style='display:block'/>
                                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                              </b:if>
                            </b:if>
                          </div>
                        </div>
                      </div>
                    </b:if>
                  </b:if>
                </b:if>
              </b:if>
            </b:includable>
            <b:includable id='itemPost' var='post'>
              <!-- Item Post Content -->
              <b:include data='post' name='postMeta'/>
              <div class='item-post-inner'>
                <div class='item-post-padd'>
                  <div class='entry-header blog-entry-header'>
                    <b:include data='post' name='postHeader'/>
                    <b:if cond='data:view.isPost and data:skin.vars.sharebuttons == &quot;1px&quot;'>
                      <b:class name='share-active'/>
                      <b:include data='post' name='postShareButtons'/>
                    </b:if>
                  </div>
                  <b:include data='post' name='postBody'/>
                <b:include cond='data:view.isPost and data:allBylineItems.labels' data='post' name='postLabels'/>
                </div>
                <b:include cond='data:view.isPost and data:allBylineItems.share' data='post' name='postShareButtons'/>
              </div>
              <b:include cond='data:view.isPost' data='post' name='postFooter'/>
            </b:includable>
            <b:includable id='jsMessages'>
              &lt;script type=&#39;text/javascript&#39;&gt;
              var messages = {
              showMore: &quot;<data:messages.showMore/>&quot;,
              postAuthor: &quot;<b:if cond='data:allBylineItems.author'>true<b:else/>false</b:if>&quot;,
              postDate: &quot;<b:if cond='data:allBylineItems.timestamp'>true<b:else/>false</b:if>&quot;
              }
              &lt;/script&gt;
            </b:includable>
            <b:includable id='nextPageLink'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='post' var='post'>
              <!-- Index Posts -->
              <b:if cond='data:view.isMultipleItems'>
                <b:include data='post' name='indexPost'/>
              </b:if>
              <!-- Item Post -->
              <b:if cond='data:view.isSingleItem'>
                <b:include data='post' name='itemPost'/>
              </b:if>
            </b:includable>
            <b:includable id='postAuthor' var='post'>
              <!-- Post Author -->
              <span class='entry-author'><data:post.author.name/></span>
            </b:includable>
            <b:includable id='postBody' var='post'> 
              <!-- Ads before post content, if post page. -->
              <b:if cond='data:view.isPost'><div id='before-ad'/></b:if>
              <!-- Post Body Entry Content-->
              <div class='post-body entry-content' id='post-body'>
                <data:post.body/>
              </div>
              <!-- Ads after post content, if post page. -->
              <b:if cond='data:view.isPost'><div id='after-ad'/></b:if>
            </b:includable>
            <b:includable id='postBodySnippet' var='post'>
              <b:include data='post' name='postBody'/>
            </b:includable>
            <b:includable id='postBreadcrumbs' var='post'>
              <!-- Post Breadcrumbs -->
              <b:if cond='data:view.isPost'>
                <b:if cond='data:skin.vars.breadcrumb == &quot;1px&quot;'><nav id='breadcrumb'><a class='home' expr:href='data:blog.homepageUrl'><data:messages.home/></a><b:if cond='data:post.labels'><em class='delimiter'/><a class='label' expr:href='data:post.labels.first.url'><data:post.labels.first.name/></a></b:if></nav></b:if>
                <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home/>&quot;,&quot;item&quot;:&quot;<data:blog.homepageUrl.canonical/>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:2,&quot;name&quot;:&quot;<b:if cond='data:post.labels'><data:post.labels.first.name/></b:if>&quot;,&quot;item&quot;:&quot;<data:post.labels.first.url.canonical/>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:3,&quot;name&quot;:&quot;<data:post.title/>&quot;,&quot;item&quot;:&quot;<data:post.url.canonical/>&quot;}]}</script>
              </b:if>
              <b:if cond='data:view.isPage'>
                <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home/>&quot;,&quot;item&quot;:&quot;<data:blog.homepageUrl.canonical/>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:2,&quot;name&quot;:&quot;<data:post.title/>&quot;,&quot;item&quot;:&quot;<data:post.url.canonical/>&quot;}]}</script>
              </b:if>
            </b:includable>
            <b:includable id='postCategory' var='post'>
              <!-- Post Label/Category -->
              <b:if cond='data:post.labels'>
                <span class='entry-category'><data:post.labels.first.name/></span>
              </b:if>
            </b:includable>
            <b:includable id='postCommentsAndAd' var='post'>
              <!-- In-Feed Ads -->
              <b:include cond='data:view.isMultipleItems and not data:view.search.label and not data:view.search.query and not data:view.isArchive' data='post' name='inlineAd'/>
              <article class='blog-post hentry'>
                <b:class cond='data:view.isMultipleItems' expr:name='&quot;index-post post-&quot; + data:i'/>
                <b:class cond='data:view.isSingleItem' name='item-post'/>
                <b:include data='post' name='post'/>
              </article>
              <b:if cond='data:view.isSingleItem and data:post.allowComments'>
                <!-- Post Comments -->
                <div class='blog-post-comments'>
                  <b:include data='post' name='threadedCommentsDisqus'/>
                  <b:include data='post' name='commentPicker'/>
                </div>
              </b:if>
              <!-- Post Navigation -->
              <b:include cond='data:skin.vars.postnav == &quot;1px&quot;' name='postNavigation'/>
            </b:includable>
            <b:includable id='postCommentsLink'>
              <b:if cond='data:view.isMultipleItems'>
                <span class='byline post-comment-link container'>
                  <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
                  <b:include cond='data:post.commentSource == 1' name='commentsLinkIframe'/>
                </span>
              </b:if>
            </b:includable>
            <b:includable id='postFeaturedImage' var='post'>
              <!-- Post Featured Image on Index -->
              <div class='entry-image'>
                <b:include data='post' name='postCategory'/>
                <b:if cond='data:post.featuredImage'>
                  <b:if cond='data:post.featuredImage.isYouTube'>
                    <a class='entry-image-link youtube' expr:href='data:post.url'>
                      <span class='entry-thumb' expr:data-image='data:post.featuredImage'/>
                    </a>
                    <b:else/>
                    <a class='entry-image-link' expr:href='data:post.url'>
                      <span class='entry-thumb' expr:data-image='resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/>
                    </a>
                  </b:if>
                  <b:else/>
                  <a class='entry-image-link' expr:href='data:post.url'>
                    <span class='entry-thumb' data-image='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'/>
                  </a>
                </b:if>
              </div>
            </b:includable>
            <b:includable id='postFooter' var='post'>
              <!-- Post Footer Itens -->
              <div class='post-footer'>
                <b:include cond='data:post.author.aboutMe' data='post' name='postFooterAuthorProfile'/>
                <b:include cond='data:allBylineItems.backlinks' data='post' name='relatedPosts'/>
              </div>
            </b:includable>
            <b:includable id='postFooterAuthorProfile' var='post'>
              <div class='about-author'>
                <b:class cond='not data:allBylineItems.share' name='no-share'/>
                <div class='avatar-container'>
                  <b:if cond='data:post.author.authorPhoto.image'>
                    <span class='author-avatar' expr:data-image='resizeImage(data:post.author.authorPhoto.image, 60, &quot;1:1&quot;)'/>
                  </b:if>
                </div>
                <h3 class='author-name'>
                  <a expr:alt='data:post.author.name' expr:href='data:post.author.profileUrl' target='_blank'><data:post.author.name/></a>
                </h3>
                <div class='author-description social social-color-hover'>                        
                  <span class='description-text excerpt'><data:post.author.aboutMe/></span>
                </div>
              </div>
            </b:includable>
            <b:includable id='postHeader' var='post'>
              <b:include cond='data:view.isSingleItem' data='post' name='postBreadcrumbs'/>
              <b:include data='post' name='postTitle'/>
              <b:include cond='data:view.isPost' data='post' name='headerByline'/>
            </b:includable>
            <b:includable id='postJumpLink' var='post'>
              <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
                <a class='read-more' expr:href='data:post.url'><data:blog.jumpLinkMessage/></a>
              </b:if>
            </b:includable>
            <b:includable id='postLabels' var='post'>
              <b:if cond='data:post.labels'>
                <div class='entry-tags'>
                  <b:if cond='data:allBylineItems.labels.label != &quot;&quot;'><span class='tags-label'><data:allBylineItems.labels.label/></span></b:if>
                  <b:loop values='data:post.labels' var='label'>
                    <a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a>
                  </b:loop>
                </div>
              </b:if>
            </b:includable>
            <b:includable id='postMeta' var='post'>
              <b:if cond='!data:view.isPage'>
                <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;headline&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;description&quot;:&quot;<data:post.snippets.short.jsonEscaped/>&quot;,&quot;image&quot;:[&quot;<data:post.featuredImage.jsonEscaped/>&quot;],&quot;datePublished&quot;:&quot;<data:post.date.iso8601.jsonEscaped/>&quot;,&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;Blogger&quot;,&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,&quot;width&quot;:206,&quot;height&quot;:60}}}</script>
              </b:if>
            </b:includable>
            <b:includable id='postNavigation'>
              <b:if cond='data:view.isPost'>
                <div class='post-nav'>
                  <b:if cond='data:newerPageUrl'>
                    <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;'>
                      <b:include data='{ message: &quot;prevPost&quot; }' name='translate'/>
                    </a>
                    <b:else/>
                    <span class='blog-pager-newer-link'>
                      <b:include data='{ message: &quot;prevPost&quot; }' name='translate'/>
                    </span>
                  </b:if>
                  <b:if cond='data:olderPageUrl'>
                    <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;'>
                      <b:include data='{ message: &quot;nextPost&quot; }' name='translate'/>
                    </a>
                    <b:else/>
                    <span class='blog-pager-older-link'>
                      <b:include data='{ message: &quot;nextPost&quot; }' name='translate'/>
                    </span>
                  </b:if>
                </div>
              </b:if>
            </b:includable>
            <b:includable id='postPagination'>
              <!-- Post Pagination Index -->
              <div class='blog-pager container' id='blog-pager'>
                <b:if cond='data:olderPageUrl'>
                  <a class='blog-pager-older-link load-more' expr:data-load='data:olderPageUrl' href='javascript:;' id='load-more-link'><b:include data='{ message: &quot;loadMorePosts&quot; }' name='translate'/></a>
                  <span class='loading'><span class='loader'/></span>
                  <span class='no-more load-more'><b:include data='{ message: &quot;noMorePosts&quot; }' name='translate'/></span>
                  <b:else/>
                  <span class='no-more load-more show'><b:include data='{ message: &quot;noMorePosts&quot; }' name='translate'/></span>
                </b:if>
              </div>
            </b:includable>
            <b:includable id='postReplyCount' var='post'>
              <!-- Post Reply -->
              <span class='entry-comments-link'><a expr:href='data:post.url + &quot;#comments&quot;'><data:post.numberOfComments/> <data:messages.comments/></a></span>
            </b:includable>
            <b:includable id='postShareButtons' var='post'>
              <!-- Post ShareButtons -->
              <div class='post-share'>
                <ul class='share-links social social-bg'>
                  <li class='share-icon'><span class='s-icon'/></li>
                  <li class='facebook-f'><a class='facebook window-ify' data-height='650' data-width='550' expr:data-url='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Facebook'><span>Facebook</span></a></li>
                  <li class='twitter'><a class='twitter window-ify' data-height='460' data-width='550' expr:data-url='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title' href='javascript:;' rel='nofollow' title='Twitter'><span>Twitter</span></a></li>
                  <li class='pinterest-p'><a class='pinterest window-ify' data-height='750' data-width='735' expr:data-url='&quot;https://www.pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:post.title' href='javascript:;' rel='nofollow' title='Pinterest'/></li>
                  <li class='linkedin'><a class='linkedin window-ify' data-height='700' data-width='1000' expr:data-url='&quot;https://www.linkedin.com/shareArticle?url=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='LinkedIn'/></li>
                  <li class='reddit'><a class='reddit window-ify' data-height='460' data-width='550' expr:data-url='&quot;https://reddit.com/submit?url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title' href='javascript:;' rel='nofollow' title='Reddit'/></li>
                  <li class='whatsapp'><a class='whatsapp window-ify' data-height='550' data-width='900' expr:data-url='&quot;https://api.whatsapp.com/send?text=&quot; + data:post.title + &quot; | &quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='WhatsApp'/></li>
                  <b:if cond='data:blog.isMobileRequest'>
                    <li class='telegram'><a class='telegram window-ify' data-height='460' data-width='550' expr:data-url='&quot;https://telegram.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title' href='javascript:;' rel='nofollow' title='Telegram'/></li>
                  </b:if>
                  <li class='email'><a class='email window-ify' data-height='460' data-width='550' expr:data-url='&quot;mailto:?subject=&quot; + data:post.title + &quot;&amp;body=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow' title='Email'/></li>
                  <li class='show-hid'><a href='javascript:;' rel='nofollow'/></li>
                </ul>
              </div>
            </b:includable>
            <b:includable id='postShortMeta'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='postSummary' var='post'>
              <p class='entry-excerpt excerpt'><b:eval expr='data:post.snippets.short snippet { length: 80 }'/></p>
            </b:includable>
            <b:includable id='postTimestamp' var='post'>
              <!-- Post Timestamp -->
              <span class='entry-time'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
              <a expr:name='data:post.id'/><span>Views:</span><span id='postviews'/>
            </b:includable>
            <b:includable id='postTitle' var='post'>
              <!-- Post Title Index and Item -->
              <b:if cond='data:view.isMultipleItems'>
                <h2 class='entry-title'>
                  <a class='entry-title-link' expr:href='data:post.url' rel='bookmark'><data:post.title/></a>
                </h2>
              </b:if>
              <b:if cond='data:view.isSingleItem'>
                <h1 class='entry-title'>
                  <data:post.title/>
                </h1>
              </b:if>
            </b:includable>
            <b:includable id='previousPageLink'>
              <b:comment>Disabled.</b:comment>
            </b:includable>
            <b:includable id='relatedPosts' var='post'>
              <!-- Related Posts -->
              <div id='related-wrap'>
                <div class='title-wrap related-title'>
                  <h3><data:allBylineItems.backlinks.label/></h3>
                  <b:if cond='data:post.labels'>
                    <a class='more' expr:href='data:post.labels.first.url'><data:messages.showMore/></a>
                  </b:if>
                </div>
                <div class='related-content'>
                  <b:if cond='data:post.labels'>
                    <div class='related-tag' expr:data-label='data:post.labels.first.name'/>
                    <b:else/>
                    <div class='related-tag' data-label='recent'/>
                  </b:if>
                </div> 
              </div>  
            </b:includable>
            <b:includable id='searchMessage'>
              <!-- Search Message -->
              <b:if cond='data:view.search.query'>
                <div class='queryMessage'>
                  <b:if cond='data:posts.empty'>
                    <span class='query-info query-error'/><data:view.search.resultsMessageHtml/>
                    <b:else/>
                    <span class='query-info query-success'><data:view.search.resultsMessageHtml/></span>
                  </b:if>
                </div>
              </b:if>
              <b:if cond='data:view.search.label'>
                <div class='queryMessage'>
                  <b:if cond='data:posts.empty'>
                    <span class='query-info query-error'><data:view.search.resultsMessageHtml/></span>
                    <b:else/>
                    <span class='query-info query-success'><data:view.search.resultsMessageHtml/></span>
                  </b:if>
                </div>
              </b:if>
              <b:if cond='data:view.isArchive'>
                <div class='queryMessage'>
                  <b:if cond='data:posts.empty'>
                    <span class='query-info query-error'><data:view.archive.rangeMessage/></span>
                    <b:else/>
                    <span class='query-info query-success'><data:view.archive.rangeMessage/></span>
                  </b:if>
                </div>
              </b:if>
              <b:if cond='data:view.isError'>
                <div class='errorWrap'>
                  <h3>404</h3>
                  <h4><data:messages.theresNothingHere/></h4>
                  <p><data:navMessage/></p>
                  <a class='homepage' expr:href='data:blog.homepageUrl'><data:messages.home/></a>
                </div>
              </b:if>
              <b:if cond='data:view.isMultipleItems and data:posts.empty'><div class='queryEmpty'><data:messages.noResultsFound/></div></b:if>
            </b:includable>
            <b:includable id='threadedCommentForm' var='post'>
              <div class='comment-form'>
                <a name='comment-form'/>
                <h4 id='comment-post-message'><data:messages.postAComment/></h4>
                <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
                  <p><data:this.messages.blogComment/></p>
                </b:if>
                <b:include data='post' name='commentFormIframeSrc'/>
                <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                <data:post.cmtfpIframe/>
                <script type='text/javascript'>
                  BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                </script>
              </div>
            </b:includable>
            <b:includable id='threadedCommentJs' var='post'>
              <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
              <b:template-script inline='true' name='threaded_comments'/>
              <script type='text/javascript'>
                blogger.widgets.blog.initThreadedComments(
                  <data:post.commentJso/>,
                  <data:post.commentMsgs/>,
                  <data:post.commentConfig/>);
              </script>
            </b:includable>
            <b:includable id='threadedComments' var='post'>
              <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
                <b:class cond='data:post.numberOfComments == &quot;0&quot;' name='no-comments'/>
                <a name='comments'/>
                <b:include name='commentsTitle'/>
                <div class='comments-content'>
                  <b:if cond='data:post.embedCommentForm'>
                    <b:include data='post' name='threadedCommentJs'/>
                  </b:if>
                  <div id='comment-holder'>
                    <data:post.commentHtml/>
                  </div>
                </div>
                <p class='comment-footer'>
                  <b:if cond='data:post.allowNewComments'>
                    <b:include data='post' name='threadedCommentForm'/>
                    <b:else/>
                    <b:if cond='data:post.noNewCommentsText != &quot;&quot;'><span><data:post.noNewCommentsText/></span></b:if>
                  </b:if>
                </p>
                <b:if cond='data:showCmtPopup'>
                  <div id='comment-popup'>
                    <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                    </iframe>
                  </div>
                </b:if>
              </section>
            </b:includable>
            <b:includable id='threadedCommentsDisqus' var='post'>
              <script type='text/javascript'>
                var disqus_shortname = disqusShortname;
                var disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                if (!disqus_blogger_current_url.length) {
                  disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                }
                var disqus_blogger_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
                var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
              </script>
              <script type='text/javascript'>
                //<![CDATA[
                if (commentsSystem == 'disqus') {
                  (function() {
                    var bloggerjs = document.createElement('script');
                    bloggerjs.type = 'text/javascript';
                    bloggerjs.async = true;
                    bloggerjs.src = '//' + disqus_shortname + '.disqus.com/blogger_item.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
                  })();
                }
                //]]>
              </script>
            </b:includable>
          </b:widget>
        </b:section>
        <div id='custom-ads'>
          <b:section cond='data:view.isPost' id='main-before-ad' maxwidgets='1' name='Post ADS 1' showaddelement='yes'>
            <b:widget id='HTML12' locked='false' title='' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
          <b:section cond='data:view.isPost' id='main-after-ad' maxwidgets='1' name='Post ADS 2' showaddelement='yes'>
            <b:widget id='HTML13' locked='false' title='' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </div>
        <b:section class='home-ad' cond='data:view.isHomepage' id='home-ads-2' maxwidgets='1' name='Home ADS 2' showaddelement='yes'>
          <b:widget id='HTML14' locked='false' title='' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
        </b:section>
        <b:section class='block-posts' cond='data:view.isHomepage' id='block-posts-2' name='Post Widgets 2' showaddelement='yes'/>
      </main>
      <!-- Sidebar Wrapper -->
      <aside id='sidebar-wrapper'>
        <b:class cond='data:widgets any w =&gt; w.sectionId == &quot;sidebar-ads&quot;' name='sidebar-ads-active'/>
        <b:section class='sidebar' id='social-counter' maxwidgets='1' name='Social Count' showaddelement='no'>
          <b:widget id='LinkList156' locked='true' title='Follow Us' type='LinkList' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='link-5'>#$4.2k</b:widget-setting>
              <b:widget-setting name='link-3'>#$500</b:widget-setting>
              <b:widget-setting name='link-4'>#$1.8k</b:widget-setting>
              <b:widget-setting name='text-1'>twitter</b:widget-setting>
              <b:widget-setting name='text-0'>facebook-f</b:widget-setting>
              <b:widget-setting name='text-3'>linkedin</b:widget-setting>
              <b:widget-setting name='text-2'>youtube</b:widget-setting>
              <b:widget-setting name='text-5'>twitch</b:widget-setting>
              <b:widget-setting name='text-4'>instagram</b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='link-1'>#$3.1k</b:widget-setting>
              <b:widget-setting name='link-2'>#$2.7k</b:widget-setting>
              <b:widget-setting name='link-0'>#$1.5k</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='widget-title'/>
              <b:include name='content'/>
            </b:includable>
            <b:includable id='content'>
              <div class='widget-content'>
                <ul class='social-icons social social-bg'>
                  <b:loop index='l' values='data:links' var='link'>
                    <li expr:class='data:link.name + &quot; link-&quot; + data:l'><a expr:class='data:link.name' expr:data-content='data:link.target' href='#' target='_blank'><span class='count'/></a></li>
                  </b:loop>
                </ul>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='sidebar widget-ready' id='sidebar' name='Main Sidebar' showaddelement='yes'>
          <b:widget id='PopularPosts1' locked='false' title='Most Popular' type='PopularPosts' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
              <b:widget-setting name='showThumbnails'>true</b:widget-setting>
              <b:widget-setting name='showSnippets'>true</b:widget-setting>
              <b:widget-setting name='timeRange'>LAST_MONTH</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:tag class='trending-posts' cond='data:widget.sectionId == &quot;trending&quot;' name='div'>
          <b:if cond='data:widget.sectionId == &quot;trending&quot;'>
            <b:class cond='data:posts.length != &quot;1&quot;' name='multiple'/>
          </b:if>
          <b:tag class='featured-posts' cond='data:widget.sectionId == &quot;featured&quot;' name='div'>
            <b:loop index='i' values='data:posts' var='post'>
              <b:include data='post' name='content'/>
            </b:loop>
          </b:tag>
        </b:tag>
      </div>
    </b:includable>
            <b:includable id='content' var='post'>
      <b:include data='post' name='default'/>
    </b:includable>
            <b:includable id='default' var='post'>
      <article class='popular-post post'>
        <b:class expr:name='&quot;item-&quot;+data:i'/>
        <b:if cond='data:post.featuredImage'>
          <b:if cond='data:post.featuredImage.isYouTube'>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='data:post.featuredImage'/>
            </a>
            <b:else/>
            <a class='entry-image-link' expr:href='data:post.url'>
              <span class='entry-thumb' expr:data-image='resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)'/>
            </a>
          </b:if>
          <b:else/>
          <a class='entry-image-link' expr:href='data:post.url'>
            <span class='entry-thumb' data-image='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'/>
          </a>
        </b:if>
        <div class='entry-header'>
          <h2 class='entry-title'>
            <a expr:href='data:post.url'><data:post.title/></a>
          </h2>
          <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='entry-meta'><span class='entry-time'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span></div></b:if>
        </div>
      </article>
    </b:includable>
          </b:widget>
          <b:widget id='FollowByEmail1' locked='false' title='Follow by Email' type='FollowByEmail' version='2' visible='true'>
            <b:includable id='main' var='this'>
              <b:include name='content'/>
            </b:includable>
            <b:includable id='content'>
              <div class='widget-content'>
                <div class='widget-content-inner'>
                  <div class='follow-by-email-content'>
                    <h3 class='follow-by-email-title'>
                      <data:title/>
                    </h3>
                    <p class='follow-by-email-text excerpt'><b:include data='{ message: &quot;followByEmailText&quot; }' name='translate'/></p>
                    <div class='follow-by-email-inner'>
                      <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
                        <input autocomplete='off' class='follow-by-email-address' expr:placeholder='data:messages.emailAddress' name='email' type='email'/>
                        <input class='follow-by-email-submit' expr:value='data:messages.subscribe' type='submit'/>
                        <input expr:value='data:feedPath' name='uri' type='hidden'/>
                        <input name='loc' type='hidden' value='en_US'/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </b:includable>
          </b:widget>
          <b:widget id='Label3' locked='false' title='Categories' type='Label' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
              <b:widget-setting name='display'>CLOUD</b:widget-setting>
              <b:widget-setting name='selectedLabelsList'>Bisnis,Musik,Sports,Teknologi</b:widget-setting>
              <b:widget-setting name='showType'>ALL</b:widget-setting>
              <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
              <b:include name='widget-title'/>
              <b:include name='content'/>
            </b:includable>
            <b:includable id='cloud'>
              <ul>
                <b:loop values='data:labels' var='label'>
                  <li>
                    <a class='label-name' expr:href='data:label.url'>
                      <data:label.name/>
                    </a>
                  </li>
                </b:loop>
              </ul>
            </b:includable>
            <b:includable id='content'>
              <div class='widget-content'>
                <b:class expr:name='data:this.display + &quot;-label&quot;'/>
                <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
                <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
              </div>
            </b:includable>
            <b:includable id='list'>
              <ul>
                <b:loop values='data:labels' var='label'>
                  <li>
                    <a class='label-name' expr:href='data:label.url'>
                      <data:label.name/><b:if cond='data:this.showFreqNumbers'><span class='label-count'>(<data:label.count/>)</span></b:if>
                    </a>
                  </li>
                </b:loop>
              </ul>
            </b:includable>
          </b:widget>
          <b:widget id='HTML2' locked='false' title='Comments' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getWidget} $results={3} $label={comments} $type={list}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='widget-title'/>
              <div class='widget-content'>
                <data:content/>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='sidebar widget-ready' cond='data:view.isPost' id='sidebar-ads' maxwidgets='1' name='Sidebar ADS' showaddelement='yes'>
          <b:widget id='HTML10' locked='false' title='no-style' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here ad-600" href="javascript:;">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
        </b:section>
      </aside>
    </div>
  </div>
  <div class='clearfix'/>
  <!-- Footer Wrapper -->
  <footer id='footer-wrapper'>
    <b:class cond='data:widgets none w =&gt; w.sectionId == &quot;about-section&quot;' name='compact-footer'/>
    <div class='container row-x1'>
      <b:section class='about-section' id='about-section' maxwidgets='2' name='About Section' showaddelement='yes'>
        <b:widget id='Image150' locked='true' title='About Us' type='Image' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='displayUrl'>http://3.bp.blogspot.com/-DT7lSZ-a0Qs/X1szIyt-HKI/AAAAAAAAPfM/0SJ5dERBO0sRlOTH8crhY-qjOJYlEagGwCK4BGAYYCw/s1600/TechBeing._.png</b:widget-setting>
            <b:widget-setting name='displayHeight'>405</b:widget-setting>
            <b:widget-setting name='sectionWidth'>150</b:widget-setting>
            <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
            <b:widget-setting name='displayWidth'>1600</b:widget-setting>
            <b:widget-setting name='link'>/</b:widget-setting>
            <b:widget-setting name='caption'><![CDATA[Hi, myself Karan Kankaria, the owner of this blog. Being a good student I love blogging, as I'm passionate about it. Blogging provides me with a better space to put all my knowledge and experiences so that my visitors can get the benefit of it.]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main' var='this'>
            <b:include name='content'/>
          </b:includable>
          <b:includable id='content'>
            <div class='widget-content'>
              <b:if cond='data:link == &quot;hide-image&quot;'>
                <b:class name='no-image'/>
              </b:if>
              <b:if cond='data:link != &quot;hide-image&quot;'>
                <div class='footer-logo custom-image'>
                  <a expr:href='data:blog.homepageUrl'>
                    <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' src='https://cdn.statically.io/img/3.bp.blogspot.com/-UKjKZtq0CmM/X1sy52Oe8OI/AAAAAAAAPfE/s_oodE8feQIaikSY19U4zwjVbjjyCA3JgCK4BGAYYCw/s1600/TechBeing._.png?w=174&amp;h=44&amp;f=auto'/>
                  </a>
                </div>
              </b:if>
              <div class='about-content'>
                <b:include name='widget-title'/>
                <b:if cond='data:caption'>
                  <span class='image-caption excerpt'><data:caption/></span>
                </b:if>
              </div>
            </div>
          </b:includable>
        </b:widget>
        <b:widget id='LinkList158' locked='true' title='Follow Us' type='LinkList' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='link-3'>https://www.instagram.com/karankankaria/</b:widget-setting>
            <b:widget-setting name='sorting'>NONE</b:widget-setting>
            <b:widget-setting name='text-1'>twitter</b:widget-setting>
            <b:widget-setting name='link-1'>https://twitter.com/KankariaKaran</b:widget-setting>
            <b:widget-setting name='text-0'>facebook-f</b:widget-setting>
            <b:widget-setting name='link-2'>https://www.youtube.com/channel/UCysqActG8k6KO6JvYNnDg0g</b:widget-setting>
            <b:widget-setting name='text-3'>instagram</b:widget-setting>
            <b:widget-setting name='link-0'>https://www.facebook.com/karan.kankaria.925</b:widget-setting>
            <b:widget-setting name='text-2'>youtube</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
            <b:include name='content'/>
          </b:includable>
          <b:includable id='content'>
            <div class='widget-content'>
              <b:include name='widget-title'/>
              <ul class='social-footer social social-bg-hover'>
                <b:loop values='data:links' var='link'>
                  <li expr:class='data:link.name'><a expr:class='data:link.name' expr:href='data:link.target' target='_blank'/></li>
                </b:loop>
              </ul>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </div>
    <div id='footerbar'>
      <b:class cond='data:skin.vars.footerbar_bg == data:skin.vars.footer_bg' name='border'/>
<div class='stressthinking1' id='stressthinking2'>
  <span class='stressthinking3'>
Copyright &#169; <script type='text/javascript'>var creditsyear = new Date();document.write(creditsyear.getFullYear());</script> <a expr:href='data:blog.homepageUrl'><data:blog.title/></a> All Right Reserved 
</span></div>
<b:section class='footer-menu' id='footer-menu' maxwidgets='1' name='Footer Menu' showaddelement='yes'>
  <b:widget id='LinkList159' locked='true' title='Link List' type='LinkList' version='2' visible='true'>
    <b:widget-settings>
      <b:widget-setting name='link-3'>?hl=ar</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='text-1'>Contact</b:widget-setting>
      <b:widget-setting name='link-1'>/p/contact-us.html</b:widget-setting>
      <b:widget-setting name='text-0'>Home</b:widget-setting>
      <b:widget-setting name='link-2'>https://www.techbeing.gq/p/sitemap.html</b:widget-setting>
      <b:widget-setting name='text-3'>RTL Version</b:widget-setting>
      <b:widget-setting name='link-0'>/</b:widget-setting>
      <b:widget-setting name='text-2'>Sitemap</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
              <b:include name='content'/>
            </b:includable>
    <b:includable id='content'>
              <div class='widget-content'>
                <ul>
                  <b:loop values='data:links' var='link'>
                    <li><a expr:href='data:link.target'><data:link.name/></a></li>
                  </b:loop>
                </ul>
              </div>
            </b:includable>
  </b:widget>
</b:section>
    

<div class='container row-x1' style='position: fixed;'>
        <div class='footer-copyright' id='footer-copyright'>
</div>  <span class='copyright-text widget'><a href='' id='templateify' rel='dofollow' title='Free Blogger Templates'/></span>
        
      </div></div>
  </footer>
  <!-- Hidden Widgets -->
  <div id='hidden-widgets-wrap' style='display:none'>
    <b:section class='hidden-widgets' deleted='true' id='hidden-widgets' maxwidgets='2' showaddelement='no'>
      <b:widget id='ContactForm1' locked='true' title='Formulir Kontak' type='ContactForm' version='2' visible='true'>
        <b:includable id='main'>
          <b:include name='widget-title'/>
          <b:include name='content'/>
        </b:includable>
        <b:includable id='content'>
          <div class='contact-form-widget'>
            <div class='form'>
              <form name='contact-form'>
                <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
                <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg + &quot;*&quot;' name='email' size='30' type='text' value=''/>
                <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg + &quot;*&quot;' name='email-message' rows='5'/>
                <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
                <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
                <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
              </form>
            </div>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </div>
</div>
<!-- Layout Options Js -->
<b:include name='layout-js-options'/>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'/>
<script defer='true' src='https://cdn.statically.io/gh/abdiusu/js-template/master/Magic%20Pro2.min.js'/>
<script defer='true' src='https://cdn.statically.io/gh/abdiusu/js-template/master/Magify%20Pro3.min.js'/>
<script defer='true' src='https://cdn.statically.io/gh/abdiusu/js-template/master/Magify%20Pro.min.js'/>
<!-- Mobile Menu, Overlay and Back To Top --> 
<div id='slide-menu'>
  <div class='slide-menu-header'>
    <div class='mobile-logo'/>
    <span class='hide-mobile-menu'/>
  </div>
  <div class='slide-menu-flex'>
    <div class='mobile-menu' id='mobile-menu'/>
    <div class='social-mobile'/>
  </div>
</div>
<div class='overlay'/>
<a class='back-top' href='javascript:;'/>
    <script src='https://cdn.statically.io/gh/karankankaria/JWPlayer/master/firebase.min.js' type='text/javascript'/> 
&lt;script&gt; 
$.each($(&#39;a[name]&#39;), function(i, e) { 
var elem = $(e).parent().find(&#39;#postviews&#39;); 
var blogStats = new Firebase(&quot;https://techbeingg.firebaseio.com/pages/id/&quot; + $(e).attr(&#39;name&#39;)); 
blogStats.once(&#39;value&#39;, function(snapshot) { 
var data = snapshot.val(); 
var isnew = false; 
if(data == null) { 
data= {}; 
data.value = 0; 
data.url = window.location.href; 
data.id = $(e).attr(&#39;name&#39;); 
isnew = true; 
} 
elem.text(data.value); 
data.value++; 
if(window.location.pathname!=&#39;/&#39;) 
{ 
if(isnew) 
blogStats.set(data); 
else 
blogStats.child(&#39;value&#39;).set(data.value); 
} 
}); 
}); 
&lt;/script&gt;
    &lt;script type=&#39;text/javascript&#39;&gt;
// Jquery LazyLoad Script
//&lt;![CDATA[
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:&quot;scroll&quot;,effect:&quot;show&quot;,container:window};if(b){a.extend(c,b)}var d=this;if(&quot;scroll&quot;==c.event){a(c.container).bind(&quot;scroll&quot;,function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&amp;&amp;!a.rightoffold(this,c)){a(this).trigger(&quot;appear&quot;)}else{if(e++&gt;c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr(&quot;original&quot;)){a(b).attr(&quot;original&quot;,a(b).attr(&quot;src&quot;))}if(&quot;scroll&quot;!=c.event||undefined==a(b).attr(&quot;src&quot;)||c.placeholder==a(b).attr(&quot;src&quot;)||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr(&quot;src&quot;,c.placeholder)}else{a(b).removeAttr(&quot;src&quot;)}b.loaded=false}else{b.loaded=true}a(b).one(&quot;appear&quot;,function(){if(!this.loaded){a(&quot;&lt;img /&gt;&quot;).bind(&quot;load&quot;,function(){a(b).hide().attr(&quot;src&quot;,a(b).attr(&quot;original&quot;))[c.effect](c.effectspeed);b.loaded=true}).attr(&quot;src&quot;,a(b).attr(&quot;original&quot;))}});if(&quot;scroll&quot;!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger(&quot;appear&quot;)}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d&lt;=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d&lt;=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d&gt;=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d&gt;=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[&quot;:&quot;],{&quot;below-the-fold&quot;:&quot;$.belowthefold(a, {threshold : 0, container: window})&quot;,&quot;above-the-fold&quot;:&quot;!$.belowthefold(a, {threshold : 0, container: window})&quot;,&quot;right-of-fold&quot;:&quot;$.rightoffold(a, {threshold : 0, container: window})&quot;,&quot;left-of-fold&quot;:&quot;!$.rightoffold(a, {threshold : 0, container: window})&quot;})})(jQuery);$(function(){$(&quot;img&quot;).lazyload({placeholder:&quot;https://cdn.statically.io/img/4.bp.blogspot.com/-oA8G9t61JXk/VtLrtkAzObI/AAAAAAAAFTY/EjT6jl2MEFM/s1600/bloggersstand.gif&quot;,effect:&quot;fadeIn&quot;,threshold:&quot;-50&quot;})});//]]&gt;&lt;/script&gt;
</body>
</html>
