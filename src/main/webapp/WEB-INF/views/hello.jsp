<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

    <head>
        <!-- Basic -->
        <meta charset="UTF-8" />

        <title>和英咨询业务管理核算系统</title>

        <!-- Mobile Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <!-- Import google fonts -->
        <link href='http://fonts.useso.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>

        <!-- start: CSS file-->
        <!-- Vendor CSS-->
        <link href="resources/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="resources/assets/vendor/skycons/css/skycons.css" rel="stylesheet" />
        <link href="resources/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="resources/assets/vendor/css/pace.preloader.css" rel="stylesheet" />

        <!-- Plugins CSS-->
        <link href="resources/assets/plugins/jquery-ui/css/jquery-ui-1.10.4.min.css" rel="stylesheet" />	
        <link href="resources/assets/plugins/scrollbar/css/mCustomScrollbar.css" rel="stylesheet" />
        <link href="resources/assets/plugins/bootkit/css/bootkit.css" rel="stylesheet" />
        <link href="resources/assets/plugins/magnific-popup/css/magnific-popup.css" rel="stylesheet" />
        <link href="resources/assets/plugins/fullcalendar/css/fullcalendar.css" rel="stylesheet" />
        <link href="resources/assets/plugins/jqvmap/jqvmap.css" rel="stylesheet" />

        <!-- Theme CSS -->
        <link href="resources/assets/css/jquery.mmenu.css" rel="stylesheet" />

        <!-- Page CSS -->		
        <link href="resources/assets/css/style.css" rel="stylesheet" />
        <link href="resources/assets/css/add-ons.min.css" rel="stylesheet" />

        <!-- end: CSS file-->	


        <!-- Head Libs -->
        <script src="resources/assets/plugins/modernizr/js/modernizr.js"></script>

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->		

    </head>

    <body>

        <!-- Start: Header -->
        <div class="navbar" role="navigation">
            <div class="container-fluid container-nav">
                <!-- Navbar Action -->
                <ul class="nav navbar-nav navbar-actions navbar-left">
                    <li class="visible-md visible-lg"><a href="#" id="main-menu-toggle"><i class="fa fa-th-large"></i></a></li>
                    <li class="visible-xs visible-sm"><a href="#" id="sidebar-menu"><i class="fa fa-navicon"></i></a></li>			
                </ul>
                <!-- Navbar Left -->
                <div class="navbar-left">
                    <!-- Search Form -->					
                    <form class="search navbar-form">
                        <div class="input-group input-search">
                            <input type="text" class="form-control bk-radius" name="q" id="q" placeholder="Search...">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                            </span>
                        </div>						
                    </form>
                </div>

            </div>		
        </div>

        <!-- Start: Content -->
        <div class="container-fluid content">	
            <div class="row">

                <!-- Sidebar -->
                <div class="sidebar">
                    <div class="sidebar-collapse">
                        <!-- Sidebar Header Logo-->
                        <div class="sidebar-header">
                            <img src="resources/images/logo.jpg" class="img-responsive" alt="" />
                            <p><span>财务部</span></p>
                        </div>
                        <!-- Sidebar Menu-->
                        <div class="sidebar-menu">						
                            <nav id="menu" class="nav-main" role="navigation">
                                <ul class="nav nav-sidebar">
                                    <div class="panel-body text-center">								
                                        <div class="flag">
                                            <img src="assets/img/flags/USA.png" class="img-flags" alt="" />
                                        </div>
                                    </div>
                                    <li class="active">
                                        <a href="index.html">
                                            <i class="fa fa-laptop" aria-hidden="true"></i><span>企业信息登录</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailbox-inbox.html">
                                            <!--<span class="pull-right label label-danger">235</span>-->
                                            <i class="fa fa-envelope" aria-hidden="true"></i><span>构建班发布</span>
                                        </a>
                                    </li>									
                                    <li>
                                        <a href="widgets.html">
                                            <i class="fa fa-life-bouy" aria-hidden="true"></i><span>构建班报名</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <i class="fa fa-picture-o" aria-hidden="true"></i><span>咨询项目</span>
                                        </a>
                                    </li>
                                    <li class="nav-parent">
                                        <a>
                                            <i class="fa fa-copy" aria-hidden="true"></i><span>资产中心</span>
                                        </a>
                                        <ul class="nav nav-children">
                                            <li><a href="page-profile.html"><span class="text"> 应付</span></a></li>
                                            <li><a href="page-activity.html"><span class="text"> 应收</span></a></li>
                                            <li><a href="page-timeline.html"><span class="text"> 实付</span></a></li>
                                            <li><a href="page-invoice.html"><span class="text"> 实收</span></a></li>
                                            <li><a href="page-pricing-tables.html"><span class="text"> 发票</span></a></li>
                                        </ul>
                                    </li>                                    
                                </ul>
                            </nav>
                        </div>
                        <!-- End Sidebar Menu-->
                    </div>
                    <!-- Sidebar Footer-->
                    <div class="sidebar-footer">					

                    </div>
                    <!-- End Sidebar Footer-->
                </div>
                <!-- End Sidebar -->

                <!-- Main Page -->
                <div class="main ">
                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="pull-left">
                            <ol class="breadcrumb visible-sm visible-md visible-lg">								
                                <li><a href="index.html"><i class="icon fa fa-home"></i>主页</a></li>
                                <li class="active"><i class="fa fa-laptop"></i>企业登录</li>
                            </ol>						
                        </div>
                        <div class="pull-right">
                            <p>2016年02月05日</p>
                        </div>					
                    </div>
                    <!-- End Page Header -->
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="panel bk-widget bk-border-off">
                                <div class="panel-body text-left bk-bg-white bk-padding-top-10 bk-padding-bottom-10">
                                    <div class="row">
                                        <div class="col-xs-4 bk-vcenter text-center">
                                            <div class="small-chart-wrapper">
                                                <div class="small-chart" id="sparklineBarweeklystats"></div>										
                                                <script type="text/javascript">
                                                    var sparklineBarweeklystatsData = [5, 6, 7, 2, 0, 4, 2, 4, 2, 0, 4, 2, 4, 2, 0, 4];
                                                </script>
                                            </div>
                                            <strong>Weekly stats</strong>
                                        </div>
                                        <div class="col-xs-8 text-left bk-vcenter text-center">
                                            <small>DOWNLOAD: 60%</small>
                                            <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                            <small>PROCESSED: 88%</small>
                                            <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style="width: 88%;">
                                                    <span class="sr-only">88% Complete</span>
                                                </div>
                                            </div>
                                            <small>SALE: 60%</small>
                                            <div class="progress light progress-xs  progress-striped active bk-margin-bottom-10">
                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>						
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="panel bk-widget bk-border-off">
                                <div class="panel-body bk-bg-very-light-gray">
                                    <h4 class="bk-margin-off-bottom bk-docs-font-weight-300">TOTAL PROFIT</h4>
                                    <div class="clearfix  bk-padding-top-10">
                                        <div class="pull-right bk-margin-left-15">
                                            <i class="fa fa-dollar fa-3x"></i>
                                        </div>
                                        <h1 class="bk-margin-off-top pull-right">73,695</h1>
                                    </div>									
                                    <a><h6 class="text-right bk-padding-top-20 bk-margin-off">Withdraw</h6></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="panel bk-widget bk-border-off">
                                <div class="panel-body bk-bg-very-light-gray">									
                                    <h4 class="bk-margin-off-bottom bk-docs-font-weight-300">CONVERSIONS</h4>
                                    <div class="clearfix bk-padding-top-20">
                                        <div class="text-center">
                                            <i class="fa fa-random fa-3x bk-fg-warning"></i>
                                        </div>
                                    </div>
                                    <h4 class="text-right bk-padding-top-15 bk-margin-off">369</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <%@include file="course/publish.jsp"%>
                    </div>
                </div>
                <!-- End Main Page -->

                <!-- Footer -->
                <div id="footer">
                    <ul>
                        <li>
                            <div class="title">Memory</div>
                            <div class="bar">
                                <div class="progress light progress-sm  progress-striped active">
                                    <div class="progress-bar progress-squared progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                        60%
                                    </div>
                                </div>
                            </div>			
                            <div class="desc">4GB of 8GB</div>
                        </li>
                        <li>
                            <div class="title">HDD</div>
                            <div class="bar">
                                <div class="progress light progress-sm  progress-striped active">
                                    <div class="progress-bar progress-squared progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
                                        40%
                                    </div>
                                </div>
                            </div>			
                            <div class="desc">250GB of 1TB</div>
                        </li>
                        <li>
                            <div class="title">SSD</div>
                            <div class="bar">
                                <div class="progress light progress-sm  progress-striped active">
                                    <div class="progress-bar progress-squared progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
                                        70%
                                    </div>
                                </div>
                            </div>			
                            <div class="desc">700GB of 1TB</div>
                        </li>
                        <li>
                            <div class="copyright">
                                <p class="text-muted text-right">Fire <i class="fa fa-coffee"></i> Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a> - More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a></p>
                            </div>
                        </li>				
                    </ul>	
                </div>
                <!-- End Footer -->

            </div>
        </div><!--/container-->


        <div class="clearfix"></div>		


        <!-- start: JavaScript-->

        <!-- Vendor JS-->				
        <script src="resources/assets/vendor/js/jquery.min.js"></script>
        <script src="resources/assets/vendor/js/jquery-2.1.1.min.js"></script>
        <script src="resources/assets/vendor/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="resources/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="resources/assets/vendor/skycons/js/skycons.js"></script>
        <script src="resources/assets/vendor/js/pace.min.js"></script>

        <!-- Plugins JS-->
        <script src="resources/assets/plugins/jquery-ui/js/jquery-ui-1.10.4.min.js"></script>
        <script src="resources/assets/plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="resources/assets/plugins/bootkit/js/bootkit.js"></script>
        <script src="resources/assets/plugins/magnific-popup/js/magnific-popup.js"></script>
        <script src="resources/assets/plugins/moment/js/moment.min.js"></script>	
        <script src="resources/assets/plugins/fullcalendar/js/fullcalendar.js"></script>
        <script src="resources/assets/plugins/flot/js/jquery.flot.min.js"></script>
        <script src="resources/assets/plugins/flot/js/jquery.flot.pie.min.js"></script>
        <script src="resources/assets/plugins/flot/js/jquery.flot.resize.min.js"></script>
        <script src="resources/assets/plugins/flot/js/jquery.flot.stack.min.js"></script>
        <script src="resources/assets/plugins/flot/js/jquery.flot.time.min.js"></script>
        <script src="resources/assets/plugins/flot-tooltip/js/jquery.flot.tooltip.js"></script>
        <script src="resources/assets/plugins/chart-master/js/Chart.js"></script>
        <script src="resources/assets/plugins/jqvmap/jquery.vmap.js"></script>
        <script src="resources/assets/plugins/jqvmap/data/jquery.vmap.sampledata.js"></script>
        <script src="resources/assets/plugins/jqvmap/maps/jquery.vmap.world.js"></script>
        <script src="resources/assets/plugins/sparkline/js/jquery.sparkline.min.js"></script>

        <!-- Theme JS -->		
        <script src="resources/assets/js/jquery.mmenu.min.js"></script>
        <script src="resources/assets/js/core.min.js"></script>

        <!-- Pages JS -->
        <script src="resources/assets/js/pages/index.js"></script>

        <!-- end: JavaScript-->

    </body>

</html>