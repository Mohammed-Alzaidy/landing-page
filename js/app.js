

                   // **                        (declearing a variable to work as a counter)        **// 
let noOfAddedSection = 0;

 //                                                        Addind sections function 

addSection = function () {

  //                                                     /* Increasing counter by 1*/
  noOfAddedSection++;
  
 //                    /*in each time we call the function we will create element from type section and store it in a variable.*/
  
  
  let newSectionContent = document.createElement('section');
  

  /*                  in this bit of code we store (HTML) content of the section we want to add to (HTML) page in a variable

                              and we use the (``) to store html elements easy and use (${ }) to access variables too . 
  */
    newSectionContent = `<section id="section${noOfAddedSection}" data-nav="Section ${noOfAddedSection}">
    <div class="landing__container">
    <h2>Section ${noOfAddedSection}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
 
    //                               ***finally we add the section html content to the ("main") in html page***  

  document.querySelector("main").insertAdjacentHTML("beforeend", newSectionContent);
 
}
//                              /***********************************************************************/




//                                                  Next step we will building nav items . 

/*              first we get  navbar to insert the the titles of added sections on it like , section1 , section2 .... etc       */

const navigationBar = document.querySelector("#navbar__list");

                                /* creating the function which will create the title of sections on the nav bar .*/
let createNavigationItems = function () {

/*                         At first we clear content of the variable which contain the function as in each time we adding new sections the 
//                                             already excisted sections not be called again . 
*/
  navigationBar.innerHTML = "";
  //                             For all sections already added to the HTML page we applying the next function on them .

  document.querySelectorAll("section").forEach(function (section) {

    //                     the HTML content will be added for each item in the nav bar stored in the variable addedItem . 

    let addedItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.id}</a></li>`;

    //                                   Finally we add the new li to the nav bar after the last one . 

    navigationBar.insertAdjacentHTML("beforeend", addedItem);
  });
};
//                             /***********************************************************************/

//                                     Now we will add the first 4  sections and nav_links to html page

for (let x = 1; x <= 4; x++) {
    addSection(); //Important !!! we add the new section first because the number of added nav links depend on the number of added sections .
  
  createNavigationItems();
 


}


//                             /***********************************************************************/

//                       In this section of code we will add the active class to the viewed section om the screen 

window.onscroll = function () {

  //               first we choose all sections in the page and apply the next function containing the attribute (activsection)  on them .

  document.querySelectorAll("section").forEach(function (activeSection) {

    //      sellecting each section inthe page by its data-nav attribute value (id of the section ) and stored that in variable to controle it .

    let activeA = navigationBar.querySelector(`[data-nav=${activeSection.id}]`);
    console.log(activeA);  // for check only 

    //                 If this active section (viewed in the screen) at certain limits on the screen then add active class to this section . 
    if (     activeSection.getBoundingClientRect().top >= -400 &&
             activeSection.getBoundingClientRect().top <= 200    )
    
    {
      activeSection.classList.add("your-active-class");
      activeA.classList.add("active-link");
    }
    
    else {
      activeSection.classList.remove("your-active-class");
      activeA.classList.remove("active-link");
    }

  });
};
//                             /***********************************************************************/


//                                               Creating more sectionS dynamicly
//                        When we click on botton in HTML ----> create new section and new nav_list link . 

document.querySelector("#buttonAdd").addEventListener("click", function () {
  addSection();
  createNavigationItems();
});

//                        /************************************************************************** */

//                                                   Makeing the scroll behavior smooth  
document.querySelectorAll('section').scrollIntoView({
  behavior: 'smooth',
  block: 'center '

}); 






