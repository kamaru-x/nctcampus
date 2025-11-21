<!DOCTYPE html>
<html lang="en">

<!-- Basic -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">   

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Site Metas -->
<title>Activities | National College</title>  
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="">

<!-- Site Icons -->

<!--<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png">-->

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- Site CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- ALL VERSION CSS -->
  <link rel="stylesheet" href="css/versions.css">
  <!-- Responsive CSS -->
  <link rel="stylesheet" href="css/responsive.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/custom.css">


<!-- Modernizer for Portfolio -->
<script src="js/modernizer.js"></script>



    </head>
    <body > 



<?php require_once("header.php");
if(isset($_POST['savedata']))
{
    $fullname = $_POST['fullname'];
}
?>
<div class="clearfix"></div>

 <section>
   <div class="container aboutus">
<form method="GET" action="">
<div class="bxshadow mb3per">
    <div class="mission">
        <h1 class="text-center">Online Form</h1>
        <br>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Name">Full Name</label>
                    <input class="form-control" type="text" name="fullname"  placeholder="Full Name">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Name">Age</label>
                    <input class="form-control" type="text" name="age"  placeholder="Your Age">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Dob">Date Of Birth</label>
                    <input type="date" id="dob" name="dob" placeholder="dd-mm-yyyy"  class="form-control">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Religion">Religion</label>
                    <input class="form-control" type="text" name="religion" placeholder="Religion">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Caste</label>
                    <input class="form-control" type="text" name="caste" placeholder="Caste">
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Male/Female</label><br>
                    <label class="btn-sm btn-primary"><input class="" type="radio" name="male" value="Male" checked> Male</label>
                    <label class="btn-sm btn-primary"> <input class="" type="radio" name="male" value="Female"> Female</label>
                   
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Whether belongs to</label><br>
                    <label class="btn-sm btn-primary"><input class="" type="checkbox" name="sc" value="sc" > SC</label>
                    <label class="btn-sm btn-success"> <input class="" type="checkbox" name="male" value="st"> ST</label>
                    <label class="btn-sm btn-primary"><input class="" type="checkbox" name="oec" value="oec" > OEC</label>
                    <label class="btn-sm btn-success"> <input class="" type="checkbox" name="obc" value="obc"> OBC</label>
                    <label class="btn-sm btn-primary"><input class="" type="checkbox" name="others" value="others" > OTHERS</label>
                   
                   
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Email Address</label>
                    <input class="form-control" type="email" name="email" placeholder="email id">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Name of Father</label>
                    <input class="form-control" type="text" name="fname" placeholder="Name of Father">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Name of Mother</label>
                    <input class="form-control" type="text" name="mname" placeholder="Name of Mother">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Mobile Self</label>
                    <input class="form-control" type="number" name="mnumber" placeholder="Own Mobile Number">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Residence Number</label>
                    <input class="form-control" type="number" name="rnumber" placeholder="Residence Number">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">School/College last studied & year</label>
                    <input class="form-control" type="text" name="lastyear" placeholder="School/College last studied&year">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Examination passed & No. of chances taken</label>
                    <input class="form-control" type="text" name="totalchance" placeholder="Examination passed&No. of chances taken">
                </div>
            </div>
            </div>
        <!-- ---------------------- Subject starts ---------------- -->
        <div class="col-lg-12 subjectall subcolor" >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 1</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 1">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
        </div>
        </div>
             <!-- ---------------------- Subject Ends ---------------- -->   
              <!-- ---------------------- Subject starts ---------------- -->
              <div class="col-lg-12 subjectall subcolor1">
            <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 2</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 2">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
            </div>
              </div>
             <!-- ---------------------- Subject Ends ---------------- -->   
              <!-- ---------------------- Subject starts ---------------- -->
              <div class="col-lg-12 subjectall subcolor" >
                <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 3</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 3">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
                </div>
              </div>
             <!-- ---------------------- Subject Ends ---------------- -->   

              <!-- ---------------------- Subject starts ---------------- -->
              <div class="col-lg-12 subjectall subcolor1" >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 4</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 4">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
        </div>
              </div>
             <!-- ---------------------- Subject Ends ---------------- -->   

              <!-- ---------------------- Subject starts ---------------- -->
              <div class="col-lg-12 subjectall subcolor" >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 5</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 5">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
        </div>
              </div>
             <!-- ---------------------- Subject Ends ---------------- -->   

              <!-- ---------------------- Subject starts ---------------- -->
              <div class="col-lg-12 subjectall subcolor1" >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Subject 6</label>
                    <input class="form-control" type="text" name="sub1" placeholder="Subject 6">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Grade</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Grade">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Mark</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Mark">
                        </div>
                    </div>
                </div>                
                </div>
        </div>
              </div>
             <!-- ---------------------- Subject Ends ---------------- -->   
    <div class="row">
             <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Grade</label>
                    <input class="form-control" type="text" name="fname" placeholder="Grade">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Total Marks</label>
                    <input class="form-control" type="text" name="fname" placeholder="Total Marks">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Class Obtained</label>
                    <input class="form-control" type="text" name="fname" placeholder="Class Obtained">
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Register Number</label>
                    <input class="form-control" type="text" name="fname" placeholder="Register Number">
                </div>
            </div>
                

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               
                        <div class="form-group">
                            <label for="Caste">Month</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Month">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                            <label for="Caste">Year</label>
                            <input class="form-control" type="text" name="sub1" placeholder="Year">
                        </div>
                    </div>
               
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Language under partll</label>
                    <input class="form-control" type="text" name="fname" placeholder="Language under partll">
                </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Place</label>
                    <input class="form-control" type="text" name="fname" placeholder="Place">
                </div>
                </div>
                
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Caste">Date</label>
                    <input class="form-control" type="text" name="fname" placeholder="Date">
                </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                    <label for="Image">Upload Image</label>
                    <label class="btn-sm  form-control"><input class="" type="file" name="fname" placeholder="Image"></label>
                    
                </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                    <label for="Image">Communication Address</label>
                  <textarea class="form-control" placeholder="Communication Address"></textarea>
                    
                </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt2per text-center">
                    <input type="submit" class="btn btn-info" value="Apply Now" name="savedata">
                </div>
            </div>


        </div>
      
    </div>
</div>


</form>
</div>

 </section>
<!----------- ----------------- About section ends ------------------ -->


<?php require_once("footer.php"); ?>
<!-- ALL JS FILES -->
<script src="js/all.js"></script>
<script src="js/jquery-2.2.0.min.js" type="text/javascript"></script>
<script src="js/slick.js"></script>
<!-- ALL PLUGINS -->
<script src="js/custom.js"></script>
<script src="js/timeline.min.js"></script>


</body>
</html>