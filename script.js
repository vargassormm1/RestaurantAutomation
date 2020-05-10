// Changes table number 
var tableNumber = null;
$(".tables").click(function(){
    tableNumber = $(this).attr("id")
    $(".sidenav h3").html("<h3>Table # " + tableNumber + "</h3>");
    $(".orderList p").html("<p>Table # " + tableNumber + "</p>");

});

//Change Border Color of Tables
$(".open").click(function(){
    if (tableNumber == null) {
        alert("Select a table first");
        return false;
    }
    $("#" + tableNumber).css("border", "5px solid #28a745");
    $("#" + tableNumber + " p").remove()
});

$(".full").click(function(){
    if (tableNumber == null) {
        alert("Select a table first");
        return false;
    }
    $("#" + tableNumber).css("border", "5px solid rgb(220, 53, 69)");
});

$(".dirty").click(function(){
    if (tableNumber == null) {
        alert("Select a table first");
        return false;
    }
    $("#" + tableNumber).css("border", "5px solid rgb(255, 193, 7)");
});

// Pick Table first before clicking on Order
$(".order").click(function(){
    if (tableNumber == null) {
        alert("Select a table first");
        return false;
    }
});





// Collapses Menu 
$(".collapsible").click(function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});   
    
// Adds food to order list
$("button.food").click(function(){
    var price = $(this).attr("id");
    var name = $(this).attr("name");
    $(".orders").append("<li>" + "<h5>" + name + ": $" + "<span>" + price + "</span>" + "</h5>" + "</li>");
});

// add prices to total
$("button.food").click(function(){
    var price = $(this).attr("id");
    var total = $("#total").text();
    price = parseInt(price);
    total = parseInt(total);
    total = total + price;
    $("#total").html("<span>"+ total + "</span>")
});

// Clears All Order
$(".clear").click(function(){
    $(".orders").empty();
    $("#total").html("<span>0</span>")
});

// Deletes Last Order
$(".delete").click(function(){
    var lastPrice = $(".orders li span").last().text();
    var total = $("#total").text();
    lastPrice = parseInt(lastPrice);
        total = parseInt(total);
    if(total === 0){
        return false;
    } else {
        total = total - lastPrice;
        $(".orders li").last().remove();
        $("#total").html("<span>"+ total + "</span>")
    }
});

$(".submit").click(function(){
    $(".orders").empty();
    $("#total").html("<span>0</span>")
    $(".orderList p").html("<p>Table # </p>");
});




// Adding Employee
$("#addEmployee").click(function(){
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var type = $("#type").val();
    var email = $("#email").val();
        
    $("table tbody").append("<tr><td contenteditable='true'>" + firstName + "</td><td contenteditable='true'>" + lastName + "</td><td contenteditable='true'>" + email + "</td><td contenteditable='true'>" + type + "</td>" + "<td><input type='checkbox'</td></tr>");
    $(".form")[0].reset();
    })

// Delete Selected Employee
$("#deleteEmployee").click(function(){
    $("tbody").find("input[type=checkbox]").each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    })
});




// Adds to Inventory
$("#addInventory").click(function(){
        event.preventDefault();
        var itemName = $("#itemName").val();
        var itemAmount = $("#itemAmount").val();
        var itemPrice = $("#itemPrice").val();
        
        $("table tbody").append("<tr><td contenteditable='true'>" + itemName + "</td><td contenteditable='true'>" + itemAmount + "</td><td contenteditable='true'>" + itemPrice + "</td>" + "<td><input type='checkbox'</td></tr>");
        $(".form")[0].reset();
    })

// Deletes Inventory
$("#deleteInventory").click(function(){
    $("tbody").find("input[type=checkbox]").each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    })
});



// Delete order queue 
$("#done").click(function(){
    $(this).closest("tr").remove();
});



// Takes you to Login Screen
$(".logout").click(function(){
    window.location.href="login.html";
});






















