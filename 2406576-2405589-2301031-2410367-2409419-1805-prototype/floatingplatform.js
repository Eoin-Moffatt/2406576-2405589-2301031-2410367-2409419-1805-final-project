// variables
floatingPlatformYchange = 0.83;
Px = 725;
Py = 750;
Pd = 50;



//draw 
completePath = false;
image(platformSprite, Px, Py, Pd, Pd);
// if statments for direction change
Py = Py + floatingPlatformYchange;
// if platform hits bottom changes direction to up 
if(Py >= 1000){
floatingPlatformYchange *= -1; 

}
// if platform hits middle changes direction to down
if(Py <= 500){
    floatingPlatformYchange *= -1; 
  
}
// between 700 and 850 triggers boolean
if(Py >= 700 && Py <= 850){
    completePath = true;
}







