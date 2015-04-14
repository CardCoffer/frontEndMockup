            <div class="panel-3d">
                <div class="front">

                    <div class="widget text-center">
                        <div class="widget-body padding-none">
                            <div>
                                <div class="innerAll bg-default">
                                    <img ng-src={{con.avatar}} alt="" class="img-circle" width="150" height="150">
                                 </div>
                                <div class="innerAll">
                                    <!--p>{{cardFilter}}</p-->
                                    <p class="lead strong margin-none">{{con.name}}</p><br>
                                    <p>{{con.jobtitle}}</p>
                                    <p>{{con.affiliation}}</p>
                                </div>
                                <div class="innerAll">
                                    <button class="btn btn-default">
                                        <span class="glyphicon glyphicon-repeat"></span>
                                        Back</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="back">
                    <div class="widget widget-inverse widget-scroll" data-scroll-height="165px">
                        <div class="widget-head">
                            <button class="btn btn-xs btn-default pull-right"><i class="fa fa-times"></i></button>
                            <h4 class="heading">{{con.name}}</h4>
                        </div>
                        <div class="widget-body padding-none">
                            <div>
                                <div class="box-generic border-none text-center">
                                    <i class="fa fa-envelope-o fa-2x"></i></i>&nbsp {{con.email}}
                                    <br><br>
                                    <i class="fa fa-phone fa-2x" style="text-align:justify"></i>&nbsp {{con.phone}}
                                 <div class="innerAll bg-default">
                                    <img src="../assets/images/people/144x144.png">
                                 </div>
                                 <br>
                                    <dix>
                                        <i class="fa fa-twitter fa-2x"></i> &nbsp
                                        <i class="fa fa-linkedin fa-2x"></i>&nbsp
                                        <i class="fa fa-facebook fa-2x"></i>&nbsp
                                        <i class="fa fa-pinterest fa-2x"></i>&nbsp
                                        <i class="fa fa-google-plus fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
