var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

   
    canvas.addEventListener("mousedown", my_mousedown);
    
    

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    function my_mouseup(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseup";
    }
    function my_mouseleave(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseleave";
    }

    function my_mousemove(e)
    {
        
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        
        current_position_of_mouse_y = e.clienty - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetRight;
        current_position_of_mouse_y = e.clienty - canvas.offsetBottom;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    function my_mouseup(e)
    {
        
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        
        current_position_of_mouse_y = e.clienty - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetRight;
        current_position_of_mouse_y = e.clienty - canvas.offsetBottom;

        if (mouseEvent == "mouseup") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }
    
    function my_mouseleave(e)
    {
        
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        
        current_position_of_mouse_y = e.clienty - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetRight;
        current_position_of_mouse_y = e.clienty - canvas.offsetBottom;

        if (mouseEvent == "mouseleave") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }
    
    

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}