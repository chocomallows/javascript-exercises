/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    
    let age;
    let gender;
    let town;
  
    function survey() {
      age = prompt("What's your age?");
      gender = prompt("What's your gender?");
      town = prompt("What's your hometown?");
  
      if (!age || !gender || !town) {
        alert(
          "Oops! It appears that one of the fields was empty. Lets do it again!"
        );
        survey();
      } else {
        let isConfirmed = confirm(
          `You are ${age} years of age, you identify as ${gender} and you were brought up in ${town}. Please confirm.`
        );
  
        isConfirmed ? null : survey();
      }
    }
    survey();
  })();
