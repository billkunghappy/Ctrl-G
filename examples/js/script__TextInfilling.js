function update_page(curr_constraint, curr_data) {
    console.log("Do nothing");
}

function update_model_output(curr_constraint, curr_data, curr_model) {
    var output_text = json_data[curr_constraint][curr_data]['model_output'][curr_model].replace("Unknown Title", "");
    $("#subtitle-infix").html(output_text);
}