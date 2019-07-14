# WPFavs - WordPress.org Favorite Items -  Public API

Fetch favorite themes and plugins form a WordPress.org user profile by his/her username and return as JSON data. This project is hosted on CloudFlares worker platform, so it fast, very fast. 

### Simple Format
Make a call like this `https://wpprofile.thebinarymonk.workers.dev/?user=HasinHayder`

output will be something like this

```js
{
   "body":{
      "themes":[
         "astra",
         "hello-elementor"
      ],
      "plugins":[
         "astra-sites",
         "easier-excerpts",
         "happy-elementor-addons",
         "titan-framework",
         "wp-logout-redirect",
         "wp-quick-provision"
      ]
   }
}
```

### Detailed Format
Make a call with detailed set to true, like `https://wpprofile.thebinarymonk.workers.dev/?user=HasinHayder&detailed=true`

output will be something like this

```js
{
   "body":{
      "themes":[
         {
            "name":"Astra",
            "slug":"astra",
            "version":"1.8.7",
            "preview_url":"https://wp-themes.com/astra",
            "author":{
               "user_nicename":"brainstormforce",
               "profile":"https://profiles.wordpress.org/brainstormforce",
               "avatar":"https://secure.gravatar.com/avatar/9f4255d653745eaa037105cd5eab2295?s=96&d=monsterid&r=g",
               "display_name":"Brainstorm Force"
            },
            "screenshot_url":"//ts.w.org/wp-content/themes/astra/screenshot.jpg?ver=1.8.7",
            "rating":100,
            "num_ratings":"2180",
            "homepage":"https://wordpress.org/themes/astra/",
            "description":"Astra is fast, fully customizable &amp; beautiful theme suitable for blog, personal portfolio, business website and WooCommerce storefront. It is very lightweight (less than 50KB on frontend) and offers unparalleled speed. Built with SEO in mind, Astra comes with Schema.org code integrated and is Native AMP ready so search engines will love your site. It offers special features and templates so it works perfectly with all page builders like Elementor, Beaver Builder, Visual Composer, SiteOrigin, Divi, etc. Some of the other features: # WooCommerce Ready # Responsive # RTL &amp; Translation Ready # Extendible with premium addons # Regularly updated # Designed, Developed, Maintained &amp; Supported by Brainstorm Force. Looking for a perfect base theme? Look no further. Astra is fast, fully customizable and WooCommerce ready theme that you can use for building any kind of website!"
         },
         {
            "name":"Hello Elementor",
            "slug":"hello-elementor",
            "version":"2.1.2",
            "preview_url":"https://wp-themes.com/hello-elementor",
            "author":{
               "user_nicename":"elemntor",
               "profile":"https://profiles.wordpress.org/elemntor",
               "avatar":"https://secure.gravatar.com/avatar/95d2d03d56fea4b55fcde4d62722953a?s=96&d=monsterid&r=g",
               "display_name":"Elementor"
            },
            "screenshot_url":"//ts.w.org/wp-content/themes/hello-elementor/screenshot.png?ver=2.1.2",
            "rating":94,
            "num_ratings":"28",
            "homepage":"https://wordpress.org/themes/hello-elementor/",
            "description":"A plain-vanilla &amp; lightweight theme for Elementor page builder"
         }
      ],
      "plugins":[
         {
            "name":"Astra Starter Sites – Elementor, Beaver Builder &amp; Gutenberg Templates",
            "slug":"astra-sites",
            "version":"1.3.17",
            "author":"<a href=\"http://www.brainstormforce.com\">Brainstorm Force</a>",
            "author_profile":"https://profiles.wordpress.org/nikschavan",
            "requires":"4.4",
            "tested":"5.2.2",
            "requires_php":"5.3",
            "rating":96,
            "ratings":{
               "1":0,
               "2":1,
               "3":0,
               "4":0,
               "5":14
            },
            "num_ratings":15,
            "support_threads":6,
            "support_threads_resolved":4,
            "active_installs":100000,
            "downloaded":1169959,
            "last_updated":"2019-07-11 7:41am GMT",
            "added":"2017-07-26",
            "homepage":"http://www.wpastra.com/pro/",
            "description":"<h4>FREE TEMPLATES FOR ELEMENTOR, BEAVER BUILDER AND GUTENBERG</h4>\n<p>Create professional designed pixel perfect websites in minutes with the Astra Starter Sites plugin.</p>\n<p>This plugin gives you access to 90+ pre-made full website demos for your favorite page builder such as Elementor, Beaver Builder, Brizy and the WordPress default editor Gutenberg.</p>\n<p>All you need to do is select the demo that suits your needs, import, tweak and go live!</p>\n<blockquote>\n<p>I love the fact that the Astra Starter Sites plugin comes with dozens of pre-built sites that were built using Elementor and that can be used to create a full website with one click. &#8211; Ben Pines, CMO at Elementor</p>\n<p>Astra Sites allows anyone to have a beautiful website in under 5 minutes while using all open source software. The theme is free, the plugin is free, it’s almost unbelievable. You have to see it with your own eyes. &#8211; Adam Preiser, WPCrafter</p>\n</blockquote>\n<h4>GET A WEBSITE LIVE IN 5 CLICKS!</h4>\n<p>1.Install and activate Astra Starter Sites Plugin<br />\n2.Pick a website demo that suits your needs<br />\n3.Install required plugins with a single click<br />\n4.Import the website<br />\n5.Done!</p>\n<h4>FULL WEBSITE TEMPLATES FOR</h4>\n<p>Businesses like restaurants, lawyers, agencies, interior designers, artist shops, brandstore, pet services, charity, plumber, dental clinic, construction, fitness trainer, gardening, makeup artist and a lot more. You can take a look at all of them built with different page builders.</p>\n<ul>\n<li><a href=\"https://wpastra.com/ready-websites/?page-builder=elementor&amp;category=free\" rel=\"nofollow\">Elementor Free Website Templates</a></li>\n<li><a href=\"https://wpastra.com/ready-websites/?page-builder=beaver-builder&amp;category=free\" rel=\"nofollow\">Beaver Builder Free Website Templates</a></li>\n<li><a href=\"https://wpastra.com/ready-websites/?page-builder=gutenberg&amp;category=free\" rel=\"nofollow\">Gutenberg Free Website Templates</a></li>\n<li><a href=\"https://wpastra.com/ready-websites/?page-builder=brizy&amp;category=free\" rel=\"nofollow\">Brizy Free Website Templates</a></li>\n</ul>\n<p>You can extend this library with premium ready-to-use website demos by purchasing one of the Agency Bundles, i.e. either the Mini Agency Bundle or the Agency Bundle.</p>\n<h4>WHY PEOPLE LOVE THE ASTRA THEME?</h4>\n<p>Over 300,000+ users are empowering their websites with Astra! From beginners to industry experts, everyone is loving Astra for its performance and ease of use.</p>\n<h4>Here are a few reasons why they love Astra &#8211;</h4>\n<p><strong>Faster Performance</strong> &#8211; Built with speed and performance in mind, Astra follows the best coding standards and lets you build faster loading and better performing websites.</p>\n<p><strong>Easy Customization</strong> &#8211; With all the settings managed through the customizer, Astra keeps it simple and gives you lots of options to customize everything with a few clicks.</p>\n<p><strong>Compatibility with Page Builders</strong> &#8211; Astra is built to work great with all major page builders like Elementor, Beaver Builder, Brizy, Divi, etc. With support for custom layouts and templates, it has soon become a favorite <a href=\"https://wpastra.com/theme-for-elementor/?utm_source=wp-repo&amp;utm_medium=astra_desc&amp;utm_campaign=starter_sites\" rel=\"nofollow\">theme for Elementor</a>, Beaver Builder and all the others</p>\n<p><strong>Pixel Perfect Design</strong> &#8211; Astra reduces your design time by giving you pixel-perfect FREE ready-to-use website demos within a huge library of starter sites.</p>\n<p><strong>Deeper Integrations</strong> &#8211; Astra works seamlessly with all WooCommerce plugins, LifterLMS, LearnDash etc. This means that you can create and beautify eCommerce websites and those that offer online courses in minutes.</p>\n<p><strong>Ready-to-use complete website demos</strong> &#8211; You get the above collection of ready-to-use free starter sites that can be imported and used with the Astra theme.</p>\n<p>Fetch the website, tweak images and content and go live!</p>\n<p>Use this imported site as a base for your project and don&#8217;t waste time starting from scratch!</p>\n<p><em><a href=\"https://wpastra.com/ready-websites/?utm_source=wp-repo&amp;utm_medium=link&amp;utm_campaign=readme\" rel=\"nofollow\">See list of all available sites to import »</a></em></p>\n<h4>Video Walkthrough by Adam from WPCrafter:</h4>\n<span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/zYbz-jxE9_Q?version=3&#038;rel=1&#038;fs=1&#038;autohide=2&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span>\n",
            "short_description":"The growing library of 90+ ready-to-use free website templates built for Elementor, Beaver Builder page&hellip;",
            "download_link":"https://downloads.wordpress.org/plugin/astra-sites.1.3.17.zip",
            "tags":{
               "astra-starter-sites":"Astra Starter Sites",
               "beaver-builder":"beaver builder",
               "elementor":"elementor",
               "gutenberg":"gutenberg",
               "templates":"templates"
            },
            "donate_link":"https://wpastra.com/pro/",
            "icons":{
               "1x":"https://ps.w.org/astra-sites/assets/icon-128x128.jpg?rev=1712437",
               "2x":"https://ps.w.org/astra-sites/assets/icon-256x256.jpg?rev=1712437"
            }
         },
         {
            "name":"Easier Excerpts",
            "slug":"easier-excerpts",
            "version":"1.9.0",
            "author":"<a href=\"https://pressware.co\">Pressware, LLC</a>",
            "author_profile":"https://profiles.wordpress.org/pressware",
            "requires":"4.4.2",
            "tested":"5.0.4",
            "requires_php":false,
            "rating":100,
            "ratings":{
               "1":0,
               "2":0,
               "3":0,
               "4":0,
               "5":3
            },
            "num_ratings":3,
            "support_threads":0,
            "support_threads_resolved":0,
            "active_installs":200,
            "downloaded":4609,
            "last_updated":"2018-12-21 7:07pm GMT",
            "added":"2016-03-07",
            "homepage":"https://wordpress.org/plugins/easier-excerpts/",
            "description":"<p>Automatically changes the size of the excerpt field to fit the length of your content.</p>\n<h3>Note this is not yet Gutenberg-compatible but will be soon!</h3>\n<p>Excerpts are very useful when sharing your blog post content.</p>\n<p>They allow you to provide a preview of your post to your readers as well as the email marketing service used to email new blog posts to your mailing list. This ultimately drives traffic on your site as your audience reads the remainder of the blog post.</p>\n<p>But using the native excerpt functionality in WordPress can quickly become tedious. The excerpt field is small and difficult to enlarge, so it&#8217;s hard to see how much content you’ve added, let alone manage the layout of the text.</p>\n<p>This plugin fixes that problem. By activating this plugin:</p>\n<ul>\n<li>The excerpt field will automatically expand to fit your content or will contract if you have shorter content.</li>\n<li>There are no options &#8211; it &#8220;just works.&#8221;</li>\n<li>It does not change the appearance of <em>anything</em> in the editor. It works directly with the functionality you already know.</li>\n<li>It works with both new and existing posts.</li>\n<li>No data will be affected if you opt to uninstall it.</li>\n</ul>\n<p>Ultimately, the plugin aims to help streamline one small aspect of your blogging routine.</p>\n<h3>Notes</h3>\n<p>Thank you for choosing Pressware to streamline and improve your blogging!</p>\n<ul>\n<li>You can find all of our available plugins on our <a href=\"https://bloggingplugins.com\" rel=\"nofollow\">homepage</a>.</li>\n<li>If you&#8217;re curious about the changes found in this plugin, review the Changelog above.</li>\n<li>If you opt to download a non-tagged version of the plugin (that is, the version in <code>trunk</code>), then know that this is a development version. <em>Use at your own risk.</em></li>\n</ul>\n",
            "short_description":"Automatically changes the size of the excerpt field to fit the length of your content.",
            "download_link":"https://downloads.wordpress.org/plugin/easier-excerpts.1.8.0.zip",
            "tags":{
               "blog":"blog",
               "excerpts":"excerpts"
            },
            "donate_link":"https://pressware.co/",
            "icons":{
               "1x":"https://ps.w.org/easier-excerpts/assets/icon-128x128.jpg?rev=1366127",
               "2x":"https://ps.w.org/easier-excerpts/assets/icon-256x256.jpg?rev=1366127"
            }
         },
         {
            "name":"Happy Elementor Addons",
            "slug":"happy-elementor-addons",
            "version":"1.1.1",
            "author":"<a href=\"https://happymonster.me/\">HappyMonster</a>",
            "author_profile":"https://profiles.wordpress.org/thehappymonster",
            "requires":"4.7",
            "tested":"5.2.2",
            "requires_php":"5.4",
            "rating":100,
            "ratings":{
               "1":0,
               "2":0,
               "3":0,
               "4":0,
               "5":20
            },
            "num_ratings":20,
            "support_threads":0,
            "support_threads_resolved":0,
            "active_installs":200,
            "downloaded":1172,
            "last_updated":"2019-07-10 7:52pm GMT",
            "added":"2019-03-05",
            "homepage":"https://happyaddons.com/",
            "description":"<p><a href=\"https://happyaddons.com/\" rel=\"nofollow\">HappyAddons</a> is a collection of slick, powerful widgets that works seamlessly with Elementor page builder. It’s trendy look with detail customization features allows to create extraordinary designs instantly. <a href=\"https://happyaddons.com/\" rel=\"nofollow\">HappyAddons</a> is free, rapidly growing and comes with great support.</p>\n<h3>Included Free Widgets</h3>\n<ol>\n<li><strong><a href=\"https://happyaddons.com/elementor-card-widget-demo/\" rel=\"nofollow\">Card</a></strong> &#8211; Incredibly powerful widget to demonstrate your products, articles, news, creative posts using a beautiful combination of texts, links, badge and image. Using built in positioning and offset feature you can create eye-candy designs in a twist. <a href=\"https://happyaddons.com/elementor-card-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-gradient-heading-widget-demo/\" rel=\"nofollow\">Gradient Heading</a></strong> &#8211; Another gem to create eye candy headings for your websites. You can apply different gradient styles, angles, opacity, and positions to make them look even better across different device screens. <a href=\"https://happyaddons.com/elementor-gradient-heading-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-info-box-widget-demo/\" rel=\"nofollow\">Info Box</a></strong> &#8211; Create beautiful information boxes using icons, links and texts, and make them slick using the built in positioning features. <a href=\"https://happyaddons.com/elementor-info-box-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-icon-box-widget-demo/\" rel=\"nofollow\">Icon Box</a></strong> &#8211; A simplified version of Info box but comes with powerful display features. Perfect for showcasing interesting information to your users in various styles. <a href=\"https://happyaddons.com/elementor-icon-box-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-image-compare-widget-demo/\" rel=\"nofollow\">Image Compare</a></strong> &#8211; Are you a photo-editor, agency or product designer who often needs to showcase their beautiful works in a form of before and after slider? This widget is perfect for this job. And built in styling options, vertical and horizontal orientation features can help you design these before-after sections with more creativity. <a href=\"https://happyaddons.com/elementor-image-compare-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-team-member-widget-demo/\" rel=\"nofollow\">Team Member</a></strong> &#8211; A perfect widget to showcase your beautiful team in various styles using texts, images, and social links. And just like our other widgets, you will find powerful styling options to make them stand out quite easily. <a href=\"https://happyaddons.com/elementor-team-member-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-review-widget-demo/\" rel=\"nofollow\">Review</a></strong> &#8211; Showcase your user feedback, reviews and rating easily than ever using our review widget. Display user photo, texts and star ratings. Make them stand out using built in offsets and positioning features. <a href=\"https://happyaddons.com/elementor-review-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-skill-bars-widget-demo/\" rel=\"nofollow\">Skill Bars</a></strong> &#8211; An essential building block to showcase user skills, task percentage, required tools and other progressive information in different ways. Comes with incredible customizing options to suit your needs. <a href=\"https://happyaddons.com/elementor-skill-bars-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-contact-form-7-widget-demo/\" rel=\"nofollow\">Contact Form 7</a></strong> &#8211; This utility widget helps you to integrate existing forms built using CF7 plugin across your web pages without spending too much time. <a href=\"https://happyaddons.com/elementor-contact-form-7-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-caldera-forms-widget-demo/\" rel=\"nofollow\"> Caldera Forms</a></strong> &#8211; This widget can help you to display your caldera forms to display on your web pages designed with Elementor. <a href=\"https://happyaddons.com/elementor-caldera-forms-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-we-forms-widget-demo/\" rel=\"nofollow\">weForms</a></strong> &#8211; Designed forms using weForms plugin and looking for a way to display those on your Elementor powered pages? This is the answer for that. <a href=\"https://happyaddons.com/elementor-we-forms-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-ninja-form-widget-demo/\" rel=\"nofollow\">Ninja Forms</a></strong> &#8211; Use this widget to embed forms created using Ninja Forms to display seamlessly on your web pages. Various styling options will help you to look at them even better. <a href=\"https://happyaddons.com/elementor-ninja-form-widget-demo/\" rel=\"nofollow\">Check demo</a></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-wpform-widget-demo/\" rel=\"nofollow\">WPForms</a></strong> &#8211; Use this widget to embed forms created using WPForms to display seamlessly on your web pages. Various styling options will help you to look at them even better.</li>\n<li><strong><a href=\"https://happyaddons.com/elementor-dual-button-widget-demo/\" rel=\"nofollow\">Dual Button</a></strong> &#8211; DualButton widget allows you to add two flexible and trendy action buttons in your sections, in different styles.</li>\n<li><strong>Testimonial</strong></li>\n</ol>\n<h3>Included Free Extensions</h3>\n<p><strong>Happy Effects</strong></p>\n<ol>\n<li><strong><a href=\"https://happyaddons.com/elementor-floating-effect-demo/\" rel=\"nofollow\">Floating Effects</a></strong></li>\n<li><strong><a href=\"https://happyaddons.com/elementor-css-transform-demo/\" rel=\"nofollow\">CSS Transform</a></strong></li>\n</ol>\n<p><span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class='youtube-player' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/LmtacsLcFPU?version=3&#038;rel=1&#038;fs=1&#038;autohide=2&#038;showsearch=0&#038;showinfo=1&#038;iv_load_policy=1&#038;wmode=transparent' allowfullscreen='true' style='border:0;'></iframe></span></p>\n<h3>Features</h3>\n<p>The widgets in <a href=\"https://happyaddons.com/\" rel=\"nofollow\">HappyAddons</a> are well tested on different devices to give you the best responsive output. Our code doesn’t stink and we don’t leave you blind folded when you need support from us. Before jumping into the details, let’s have a look at the features at a glance</p>\n<ul>\n<li>Just because it’s free, we don’t compromise with the quality at all. You’re still getting the same carefully crafted collection of widgets that you get elsewhere which comes for a price</li>\n<li>Responsive and tested on different screens to ensure it doesn’t break</li>\n<li>Compatible with almost every themes out there. In case of any exception, let us know and we will fix it for you</li>\n<li>Comes with demo designs so that you can quickly copy the styles without spending too much to design everything from scratch</li>\n<li>Ever growing, which means that we’re constantly adding new features and widgets to this collection every week</li>\n<li>Comes with excellent support, and that is sweet. If you don’t understand a feature, or fail to give it a desired look which was already demonstrated in a demo, or it’s not working as expected &#8211; we got your back. Just drop us a line and we will do our best to help you figure a way out.</li>\n<li>Lightweight and fast. The widgets are carefully designed to remain fat-less and bloat free. We understand how important it is to serve your page faster and we took extra care for that</li>\n<li>Comes with cohesive elements, which means that these widgets are so customizable that you can easily fit them in your existing designs, and they work nicely together with each other without making anything look bad.</li>\n<li><a href=\"https://happyaddons.com/\" rel=\"nofollow\">HappyAddons</a> brings you some powerful features to the built-in motion effects section that helps you to animate and rotate objects on their x-axis, y-axis, and z-axis like never seen before, and brings lovely effects to help your websites stand out from others.</li>\n</ul>\n",
            "short_description":"HappyAddons is a collection of slick, powerful widgets that works seamlessly with Elementor page builder. It’s trendy look with detail customization f &hellip;",
            "download_link":"https://downloads.wordpress.org/plugin/happy-elementor-addons.zip",
            "tags":{
               "addon":"addon",
               "elementor":"elementor",
               "form":"form",
               "page-builder":"page builder",
               "widget":"widget"
            },
            "donate_link":"",
            "icons":{
               "1x":"https://ps.w.org/happy-elementor-addons/assets/icon-128x128.png?rev=2110879",
               "2x":"https://ps.w.org/happy-elementor-addons/assets/icon-256x256.png?rev=2110879"
            }
         },
         {
            "name":"Titan Framework",
            "slug":"titan-framework",
            "version":"1.12.1",
            "author":"<a href=\"http://gambit.ph\">Benjamin Intal, Gambit</a>",
            "author_profile":"https://profiles.wordpress.org/bfintal",
            "requires":"4.1",
            "tested":"4.9.10",
            "requires_php":false,
            "rating":90,
            "ratings":{
               "1":2,
               "2":0,
               "3":1,
               "4":3,
               "5":18
            },
            "num_ratings":24,
            "support_threads":1,
            "support_threads_resolved":0,
            "active_installs":7000,
            "downloaded":71815,
            "last_updated":"2018-07-04 11:06am GMT",
            "added":"2014-02-17",
            "homepage":"http://www.titanframework.net/",
            "description":"<p>Titan Framework allows theme and plugin developers to create admin pages, options, meta boxes, and theme customizer options with just a few simple lines of code.</p>\n<p>This means faster theme &amp; plugin creation for everyone.</p>\n<p><a href=\"http://www.titanframework.net/what/\" rel=\"nofollow\">What is Titan Framework and how does it work?</a></p>\n<h4>The Goal</h4>\n<p>Titan Framework aims to be easily used by everyone. The goal is to make it plug and play &#8211; just activate the plugin and start creating your options.</p>\n<p><a href=\"http://www.titanframework.net/how/\" rel=\"nofollow\">How to start developing with Titan Framework</a></p>\n<ul>\n<li><a href=\"https://gambit-slackin.herokuapp.com/\" rel=\"nofollow\">Join the Community in Slack</a></li>\n<li><a href=\"http://www.titanframework.net/docs\" rel=\"nofollow\">Documentation and Tutorials for Developers</a></li>\n<li><a href=\"https://github.com/gambitph/Titan-Framework\" rel=\"nofollow\">Titan Framework GitHub Repository</a></li>\n<li><a href=\"https://github.com/gambitph/Titan-Framework/issues\" rel=\"nofollow\">Issue Tracker</a></li>\n</ul>\n<h4>Start Creating Your Theme</h4>\n<p><a href=\"http://www.titanframework.net/\" rel=\"nofollow\">You can generate your own Underscores based theme with Titan Framework through our site</a></p>\n<p>The generated theme comes with sample pre-created options in the admin and theme customizer along with code documentation.</p>\n<h4>Features</h4>\n<ul>\n<li>Makes development unbelievably easy</li>\n<li>Built with optimization in mind</li>\n<li>Does NOT clutter the database</li>\n<li>Integrates with your project seamlessly</li>\n<li>Theme customizer live preview integration</li>\n<li>Supports child themes</li>\n<li>Automatic CSS generation with SCSS support</li>\n<li>Full font style fields</li>\n<li>Easy Digital Download activation integration</li>\n</ul>\n<h4>Easy creation of:</h4>\n<ul>\n<li>Admin menus and submenus</li>\n<li>Admin pages</li>\n<li>Admin options and tabs</li>\n<li>Meta boxes and options</li>\n<li>Theme customizer sections and options</li>\n</ul>\n<h4>Options available in admin pages, meta boxes and theme customizer:</h4>\n<ul>\n<li>Ajax button</li>\n<li>Checkbox</li>\n<li>Code (using <a href=\"http://ace.c9.io/#nav=about\" rel=\"nofollow\">Ace</a>)</li>\n<li>Color picker</li>\n<li>Custom</li>\n<li>Date</li>\n<li>EDD License (Easy Digital Downloads license)</li>\n<li>Editor (WYSIWYG)</li>\n<li>Enable</li>\n<li>File upload</li>\n<li>Font Style (Web safe fonts and Google WebFonts)</li>\n<li>Gallery</li>\n<li>Group</li>\n<li>Heading</li>\n<li>Iframe</li>\n<li>Media uploader</li>\n<li>Multicheck</li>\n<li>Multicheck categories and taxonomies</li>\n<li>Multicheck pages and posts</li>\n<li>Multicheck post types</li>\n<li>Note</li>\n<li>Number</li>\n<li>Radio buttons</li>\n<li>Radio palette picker</li>\n<li>Radio image</li>\n<li>Save and reset buttons</li>\n<li>Select (drop down)</li>\n<li>Select Google WebFont</li>\n<li>Select categories and taxonomies</li>\n<li>Select pages and posts</li>\n<li>Select post types</li>\n<li>Sortable</li>\n<li>Text</li>\n<li>Textarea</li>\n</ul>\n<h4>Supporting the Framework</h4>\n<p>Titan is super new, so far the framework has been getting good feedback from the community. Help out and spread the word by starring this repo, sending tweets, writing blog posts about what you think about Titan, and <a href=\"https://wordpress.org/support/view/plugin-reviews/titan-framework\">review the plugin</a>.</p>\n<h4>Help Translate</h4>\n<p>We want Titan Framework to be used by everyone, and since not everyone speaks or reads english, we would appreciate it if you can <a href=\"https://www.transifex.com/projects/p/titan-framework/\" rel=\"nofollow\">help translate the framework to your language</a>.</p>\n<h4>Currently translated to</h4>\n<ul>\n<li>French (thanks @PunKeel)</li>\n<li>German (thanks @jascha)</li>\n<li>Italian (thanks @DavideVogliotti &amp; Giuseppe Pignataro)</li>\n<li>Portuguese (thanks @pagelab)</li>\n<li>Spanish (thanks @maperezotero)</li>\n<li>Turkish (thanks @gurkankara)</li>\n</ul>\n<h4>Donate to the Development</h4>\n<p>If Titan Framework has helped you in any way, we would appreciate any amount of donations that you give us. Donations would mean more development time for the framework as I am continuously developing it during my free time.</p>\n<p><a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=9X7HJBGJ37VH6\" rel=\"nofollow\"></a></p>\n<h4>Special Thanks to all the Contributors</h4>\n<p>@ahansson89, @ahmadawais, @ardallan, @BrazenlyGeek, @csloisel, @DavideVogliotti, @davidossahdez, @desaiuditd, @dovy, @fabiorphp, @iografica, @jaeh, @kevinlangleyjr, @manishsongirkar, @mendezcode, @MickeyKay, @nemke, @sagarjadhav, @smccafferty, @tojibon</p>\n<p>and to everyone else in the GitHub repo!</p>\n",
            "short_description":"Create Settings for Your WordPress Themes &amp; Plugins with Just a Few Lines of Code.",
            "download_link":"https://downloads.wordpress.org/plugin/titan-framework.1.12.1.zip",
            "tags":{
               "admin":"admin",
               "admin-panel":"admin panel",
               "framework":"framework",
               "meta-box":"meta box",
               "options":"options"
            },
            "donate_link":"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D2MK28E7BDLHC",
            "icons":{
               "1x":"https://ps.w.org/titan-framework/assets/icon-128x128.png?rev=1463717",
               "2x":"https://ps.w.org/titan-framework/assets/icon-256x256.png?rev=1463717"
            }
         },
         {
            "name":"WP Logout Redirect",
            "slug":"wp-logout-redirect",
            "version":"1.1",
            "author":"<a href=\"https://github.com/hasinhayder\">Hasin Hayder</a>",
            "author_profile":"https://profiles.wordpress.org/hasinhayder",
            "requires":"2.5.0",
            "tested":"5.2.2",
            "requires_php":false,
            "rating":0,
            "ratings":{
               "1":0,
               "2":0,
               "3":0,
               "4":0,
               "5":0
            },
            "num_ratings":0,
            "support_threads":0,
            "support_threads_resolved":0,
            "active_installs":0,
            "downloaded":64,
            "last_updated":"2019-07-13 10:28am GMT",
            "added":"2019-07-12",
            "homepage":"https://wordpress.org/plugins/wp-logout-redirect/",
            "description":"<p>This is a simple plugin which will take users to the homepage after logout. There is no option update, no manual url settings, no  hassles &#8211; it&#8217;s plain simple! It does only one job and that is redirecting the user to the homepage after logout from the WordPress admin panel.</p>\n<p>Developers can also add their custom redirection URL by using the hook <code>wplr_home_url</code>  like this</p>\n<pre><code>add_filter('wplr_home_url',function($url){\n    return \"https://wordpress.org\";\n});\n</code></pre>\n<h4>Bugs, technical hints or contribute</h4>\n<p>Please give us feedback, contribute and file technical bugs on <a href=\"https://github.com/hasinhayder/wp-logout-redirect\" rel=\"nofollow\">GitHub Repo</a>.</p>\n",
            "short_description":"This is a simple plugin which will take users to the homepage after logout. There&hellip;",
            "download_link":"https://downloads.wordpress.org/plugin/wp-logout-redirect.zip",
            "tags":{
               "admin":"admin",
               "logout":"logout",
               "logout-redirect":"logout redirect",
               "redirection":"redirection",
               "settings":"settings"
            },
            "donate_link":"",
            "icons":{
               "1x":"https://ps.w.org/wp-logout-redirect/assets/icon.svg?rev=2122307",
               "svg":"https://ps.w.org/wp-logout-redirect/assets/icon.svg?rev=2122307"
            }
         },
         {
            "name":"WP Quick Provision",
            "slug":"wp-quick-provision",
            "version":"3.0.1",
            "author":"<a href=\"https://provisionwp.com\">Hasin Hayder</a>",
            "author_profile":"https://profiles.wordpress.org/hasinhayder",
            "requires":false,
            "tested":"5.2.2",
            "requires_php":false,
            "rating":100,
            "ratings":{
               "1":0,
               "2":0,
               "3":0,
               "4":0,
               "5":19
            },
            "num_ratings":19,
            "support_threads":0,
            "support_threads_resolved":0,
            "active_installs":10,
            "downloaded":220,
            "last_updated":"2019-07-13 7:28pm GMT",
            "added":"2019-07-09",
            "homepage":"https://provisionwp.com",
            "description":"<p>This plugin can save you from doing the same tasks again and again you do after installing a fresh copy of WordPress. You can provision your new setup by automatically installing themes and plugins using <strong>WP Quick Provision</strong> plugin, all by supplying a list of those themes and plugins from gist.github.com. Here is a valid data format that is required by this plugin to properly provision your WordPress installation.</p>\n<pre><code>{\n    \"themes\": [\n        \"hello-elementor\",\n        \"wp-bootstrap-starter\"\n    ],\n    \"plugins\": [\n        \"elementor\",\n        \"happy-elementor-addons\",\n        \"contact-form-7\",\n        \"woocommerce\",\n        \"query-monitor\",\n        \"regenerate-thumbnails\",\n        \"classic-editor\",\n        \"jsm-show-post-meta\"\n    ]\n}\n</code></pre>\n<p>Example Provision Data URL: <a href=\"https://gist.github.com/hasinhayder/7b93c50e5f0ff11e26b9b8d81f81d306\" rel=\"nofollow\">https://gist.github.com/hasinhayder/7b93c50e5f0ff11e26b9b8d81f81d306</a> or <a href=\"https://gist.github.com/hasinhayder/5cf59b883005e043454f5fe0d2d9546b\" rel=\"nofollow\">https://gist.github.com/hasinhayder/5cf59b883005e043454f5fe0d2d9546b</a></p>\n<p>As soon as you save this data on gist.github.com and add tis gist url in your plugin, it will start installing all these themes and plugins mentioned in your data. It will not download a plugin if it is already available in your WordPress setup.</p>\n<p>From version 1.1 you can host your provision data anywhere and supply that URL to this plugin for provisioning.</p>\n<p>After installing everything, <strong>WP Quick Provision</strong> will activate all these plugins.</p>\n",
            "short_description":"This is a powerful provisioning plugin to install multiple themes and plugins automatically by providing&hellip;",
            "download_link":"https://downloads.wordpress.org/plugin/wp-quick-provision.zip",
            "tags":{
               "development":"development",
               "management":"management",
               "provision":"provision",
               "settings":"settings",
               "setup":"setup"
            },
            "donate_link":"",
            "icons":{
               "1x":"https://ps.w.org/wp-quick-provision/assets/icon.svg?rev=2119981",
               "svg":"https://ps.w.org/wp-quick-provision/assets/icon.svg?rev=2119981"
            }
         }
      ]
   }
}
```