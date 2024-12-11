function update_page(curr_constraint, curr_data) {
    var keyword = JSON.stringify(json_data[curr_constraint][curr_data]["constraints"]);
    $("#subtitle-keyword").text(keyword);
}

function update_model_output(curr_constraint, curr_data, curr_model) {
    var output_text = json_data[curr_constraint][curr_data]['model_output'][curr_model]['suggestion'];
    $("#subtitle-infix").text(output_text);
}