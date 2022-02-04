import swal from 'sweetalert';


function SweetAlert() {
  return swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });
}

export default SweetAlert;
