/**
 * 
 * 
 * 
 */

function toggleMenu() {
    var toggleMenu = function () {
        if (document.getElementById("nlist").hasAttribute("style")) {
            if ($("#nlist").css("display") === "none") {
                $("#nlist").css("display", "block");
            } else if ($("#nlist").css("display") === "none") {
                $("#nlist").css("display", "none");
            }
        } else if (!document.getElementById("nlist").hasAttribute("style")) {
            $("#nlist").attr("style", "display: none;");
        }
    }
}