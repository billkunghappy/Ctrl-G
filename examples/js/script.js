// Load the qualitative results into the page. The data is in json_data.

// Parse the data
json_data = JSON.parse(json_data);

// Initialize the dropdown
function init_dropdown_contstraint() {
    Object.keys(json_data).forEach(key => {
        $("#dropdown-constraint" ).append( "<li><a class=\"dropdown-item\">" + key + "</a></li>");    
    });
    
    // Add event listener to the dropdown
    $('#dropdown-constraint .dropdown-item').click(function(){
        // Init the data dropdown
        var curr_constraint = $(this).text();
        init_dropdown_data(curr_constraint);
        $("#constraint-btn").text(curr_constraint);
        console.log("Constraint selected: " + curr_constraint);
    });
    $('#dropdown-constraint .dropdown-item:last').click();
    console.log("Constraints Dropdown initialized");
}

function init_dropdown_data(curr_constraint) {
    $("#dropdown-data li").remove();
    Object.keys(json_data[curr_constraint]).forEach(data_id => {
        $("#dropdown-data" ).append( "<li><a class=\"dropdown-item\">" + data_id + "</a></li>");    
    });

    // Add event listener to the dropdown
    $('#dropdown-data .dropdown-item').click(function(){
        // Init the data dropdown
        var curr_data = $(this).text();
        init_dropdown_model(curr_constraint, curr_data);
        update_page(curr_constraint, curr_data);
        $("#data-btn").text(curr_data);
        console.log("Data selected: " + curr_data);
    });
    $('#dropdown-data .dropdown-item:first').click();
    console.log("Data Dropdown initialized");
}

function init_dropdown_model(curr_constraint, curr_data) {
    $("#dropdown-model li").remove();
    Object.keys(json_data[curr_constraint][curr_data]['model_output']).forEach(model_name => {
        $("#dropdown-model" ).append( "<li><a class=\"dropdown-item\">" + model_name + "</a></li>");    
    });

    // Add event listener to the dropdown
    $('#dropdown-model .dropdown-item').click(function(){
        // Init the data dropdown
        var curr_model = $(this).text();
        update_model_output(curr_constraint, curr_data, curr_model);
        $("#model-btn").text(curr_model);
        console.log("Model selected: " + curr_model);
    });
    $('#dropdown-model .dropdown-item:first').click();
    console.log("Model Dropdown initialized");
}

init_dropdown_contstraint();