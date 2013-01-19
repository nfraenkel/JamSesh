  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>music.js/demo/audiolet/audiolet_app.js at master · gregjopa/music.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="61iAVmjgKtrAUJjw2LucEpw+dz5POC3ucGBUU22ph3U=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-b6e4a9de2a215d2d19f092cdbe4739e525ed6061.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-9d67d355fef80aa4aa95e9a29207dfcb3f237cb9.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-cc4895cbb610429d2ce48e7c2392822c33db2dfe.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-25250eebf4383186fbf0739210d6b5cef03891c9.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/gregjopa/music.js/blob/ae4f13291106145308df8b3b4ae43072f6840d59/demo/audiolet/audiolet_app.js'>
    <meta property="og:title" content="music.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/gregjopa/music.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/a956186fbb0f8ace6f6b69d5c5781dc5?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="music theory library for javascript. Contribute to music.js development by creating an account on GitHub."/>

    <meta name="description" content="music theory library for javascript. Contribute to music.js development by creating an account on GitHub." />

  <link href="https://github.com/gregjopa/music.js/commits/master.atom" rel="alternate" title="Recent Commits to music.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="gracewang92" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>

    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/gracewang92" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/efca031fa18452590eb878089fe5ec47?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> gracewang92
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="61iAVmjgKtrAUJjw2LucEpw+dz5POC3ucGBUU22ph3U=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1785553" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/gregjopa/music.js/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/gregjopa/music.js/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/gregjopa/music.js/stargazers">113</a>
          </li>

              <li><a href="/gregjopa/music.js/fork" class="minibutton js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/gregjopa/music.js/network" class="social-count">9</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/gregjopa" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">gregjopa</span>
                  </a></span> /
                <strong><a href="/gregjopa/music.js" class="js-current-repository">music.js</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/gregjopa/music.js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/gregjopa/music.js/network" highlight="repo_network">Network</a></li>
    <li><a href="/gregjopa/music.js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/gregjopa/music.js/issues" highlight="repo_issues">Issues <span class='counter'>1</span></a></li>

      <li><a href="/gregjopa/music.js/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/gregjopa/music.js/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/gregjopa/music.js/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-filter="branches" class="js-select-menu-tab selected">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list js-filter-tab js-filter-branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>

                    <a href="/gregjopa/music.js/blob/master/demo/audiolet/audiolet_app.js" class="js-navigation-open select-menu-item-text js-select-button-text" data-name="master" rel="nofollow">master</a>

              </div> <!-- /.select-menu-item -->


              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list js-filter-tab js-filter-tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring" style="display:none;">


            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/gregjopa/music.js" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/gregjopa/music.js/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/gregjopa/music.js/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2323d56101360d61de76f4941b93d9b4 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:2323d56101360d61de76f4941b93d9b4 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gregjopa/music.js" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">music.js</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gregjopa/music.js/tree/master/demo" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">demo</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/gregjopa/music.js/tree/master/demo/audiolet" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">audiolet</span></a></span> / <strong class="final-path">audiolet_app.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="demo/audiolet/audiolet_app.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
      </div>

      <a href="/gregjopa/music.js/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a956186fbb0f8ace6f6b69d5c5781dc5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/gregjopa" rel="author">gregjopa</a></span>
    <time class="js-relative-date" datetime="2011-05-22T16:25:13-07:00" title="2011-05-22 16:25:13">May 22, 2011</time>
    <div class="commit-title">
        <a href="/gregjopa/music.js/commit/7191724232adf40d3f78d7e23a338fb8443fc281" class="message">first commit</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a956186fbb0f8ace6f6b69d5c5781dc5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gregjopa">gregjopa</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/gregjopa/music.js/blob/ae4f13291106145308df8b3b4ae43072f6840d59/demo/audiolet/audiolet_app.js" data-title="music.js/demo/audiolet/audiolet_app.js at master · gregjopa/music.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>87 lines (71 sloc)</span>
                <span>2.29 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/gregjopa/music.js/edit/master/demo/audiolet/audiolet_app.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/gregjopa/music.js/raw/master/demo/audiolet/audiolet_app.js" class="button minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/gregjopa/music.js/blame/master/demo/audiolet/audiolet_app.js" class="button minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/gregjopa/music.js/commits/master/demo/audiolet/audiolet_app.js" class="button minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// audio synthesis with audiolet.js</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">Synth</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC3'>	<span class="nx">Extends</span><span class="o">:</span> <span class="nx">AudioletGroup</span><span class="p">,</span></div><div class='line' id='LC4'>	<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">audiolet</span><span class="p">,</span> <span class="nx">frequency</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>		<span class="nx">AudioletGroup</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">initialize</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">audiolet</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC6'>		<span class="c1">// Basic wave</span></div><div class='line' id='LC7'>		<span class="k">this</span><span class="p">.</span><span class="nx">sine</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Sine</span><span class="p">(</span><span class="nx">audiolet</span><span class="p">,</span> <span class="nx">frequency</span><span class="p">);</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>		<span class="c1">// Gain envelope</span></div><div class='line' id='LC10'>		<span class="k">this</span><span class="p">.</span><span class="nx">gain</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Gain</span><span class="p">(</span><span class="nx">audiolet</span><span class="p">);</span></div><div class='line' id='LC11'>		<span class="k">this</span><span class="p">.</span><span class="nx">env</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PercussiveEnvelope</span><span class="p">(</span><span class="nx">audiolet</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">,</span> <span class="p">.</span><span class="mi">5</span><span class="p">,</span></div><div class='line' id='LC12'>			<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'>				<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">scheduler</span><span class="p">.</span><span class="nx">addRelative</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">remove</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC14'>			<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC15'>		<span class="p">);</span></div><div class='line' id='LC16'>		<span class="k">this</span><span class="p">.</span><span class="nx">envMulAdd</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MulAdd</span><span class="p">(</span><span class="nx">audiolet</span><span class="p">,</span> <span class="mf">0.3</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="c1">// Main signal path</span></div><div class='line' id='LC19'>		<span class="k">this</span><span class="p">.</span><span class="nx">sine</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">gain</span><span class="p">);</span></div><div class='line' id='LC20'>		<span class="k">this</span><span class="p">.</span><span class="nx">gain</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">outputs</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>		<span class="c1">// Envelope</span></div><div class='line' id='LC23'>		<span class="k">this</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">envMulAdd</span><span class="p">);</span></div><div class='line' id='LC24'>		<span class="k">this</span><span class="p">.</span><span class="nx">envMulAdd</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">gain</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC25'>	<span class="p">}</span></div><div class='line' id='LC26'><span class="p">});</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="kd">var</span> <span class="nx">AudioletAppNote</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC29'>	<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">note</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Audiolet</span><span class="p">();</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		<span class="kd">var</span> <span class="nx">synth</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Synth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">,</span> <span class="nx">note</span><span class="p">.</span><span class="nx">frequency</span><span class="p">());</span></div><div class='line' id='LC33'>		<span class="nx">synth</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC34'>	<span class="p">}</span></div><div class='line' id='LC35'><span class="p">});</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="kd">var</span> <span class="nx">AudioletAppChord</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC38'>	<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">chordArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Audiolet</span><span class="p">();</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">chordPattern</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PSequence</span><span class="p">([</span><span class="nx">chordArray</span><span class="p">]);</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="c1">// Play the progression</span></div><div class='line' id='LC44'>		<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">scheduler</span><span class="p">.</span><span class="nx">play</span><span class="p">([</span><span class="nx">chordPattern</span><span class="p">],</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC45'>									 <span class="k">this</span><span class="p">.</span><span class="nx">playChord</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC46'>	<span class="p">},</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>	<span class="nx">playChord</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">chord</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">chord</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">synth</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Synth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">,</span> <span class="nx">chord</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">frequency</span><span class="p">());</span></div><div class='line' id='LC51'>			<span class="nx">synth</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC52'>		<span class="p">}</span></div><div class='line' id='LC53'>	<span class="p">}</span></div><div class='line' id='LC54'><span class="p">});</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'><span class="kd">var</span> <span class="nx">AudioletAppScale</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Class</span><span class="p">({</span></div><div class='line' id='LC57'>		<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">scaleArray</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>		<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Audiolet</span><span class="p">();</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>		<span class="kd">var</span> <span class="nx">freqArray</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC61'>		<span class="kd">var</span> <span class="nx">durationArray</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC62'>		<span class="c1">// loop through scale array for each note object</span></div><div class='line' id='LC63'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">scaleArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC64'>			<span class="nx">freqArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">scaleArray</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">frequency</span><span class="p">());</span></div><div class='line' id='LC65'>			<span class="nx">durationArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC66'>		<span class="p">}</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>		<span class="c1">// walk down scale</span></div><div class='line' id='LC69'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">scaleArray</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>			<span class="nx">freqArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">scaleArray</span><span class="p">[(</span><span class="nx">scaleArray</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">-</span><span class="nx">i</span><span class="p">].</span><span class="nx">frequency</span><span class="p">());</span></div><div class='line' id='LC71'>			<span class="nx">durationArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC72'>		<span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>		<span class="kd">var</span> <span class="nx">melody</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PSequence</span><span class="p">(</span><span class="nx">freqArray</span><span class="p">);</span></div><div class='line' id='LC76'>		<span class="kd">var</span> <span class="nx">frequencyPattern</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PChoose</span><span class="p">([</span><span class="nx">melody</span><span class="p">]);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>		<span class="kd">var</span> <span class="nx">durationPattern</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PChoose</span><span class="p">([</span><span class="k">new</span> <span class="nx">PSequence</span><span class="p">(</span><span class="nx">durationArray</span><span class="p">)]);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>		<span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">scheduler</span><span class="p">.</span><span class="nx">play</span><span class="p">([</span><span class="nx">frequencyPattern</span><span class="p">],</span> <span class="nx">durationPattern</span><span class="p">,</span></div><div class='line' id='LC81'>			<span class="kd">function</span><span class="p">(</span><span class="nx">frequency</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="kd">var</span> <span class="nx">synth</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Synth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">,</span> <span class="nx">frequency</span><span class="p">);</span></div><div class='line' id='LC83'>				<span class="nx">synth</span><span class="p">.</span><span class="nx">connect</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">audiolet</span><span class="p">.</span><span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC84'>			<span class="p">}.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC85'>		<span class="p">);</span></div><div class='line' id='LC86'>	<span class="p">}</span></div><div class='line' id='LC87'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06747s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06900' data-host='fe1'></span>
    
  </body>
</html>

