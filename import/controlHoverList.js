import { editOptionsEnableDisable } from "../exports/multiTaskHandler";

function controlHoverList() {
  $(".list-opt").on("mouseover", function(e) {
    var ischecked=false;
    $(".btoggle").each(function(_i, elem) {
      if (elem.checked) {
        ischecked=true;
        elem.checked=false;
      }
    });
    ischecked && ($(this).find(".btoggle")[0].checked=true);
    window.ishovered=ischecked;
    if (ischecked && $(e.target).is("._2ndlist")) {
      editOptionsEnableDisable(".s-edit");
    }
  });
}
export default controlHoverList;