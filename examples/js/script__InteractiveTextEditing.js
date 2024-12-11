function update_page(curr_constraint, curr_data) {
    $("#subtitle-prefix").text(json_data[curr_constraint][curr_data]["prefix"]);
    $("#subtitle-suffix").text(json_data[curr_constraint][curr_data]["constraints"]['suffix']);
    var keyword = JSON.stringify(json_data[curr_constraint][curr_data]["constraints"]['keyword']);
    var wordlen = JSON.stringify(json_data[curr_constraint][curr_data]["constraints"]['wordlength']);
    $("#subtitle-keyword").text(keyword);
    $("#subtitle-wordlen").text(wordlen);
    // Update model output
    // Hide old results
    // $("#pricingTable-firstTable_table").addClass("hidden");
}

function update_model_output(curr_constraint, curr_data, curr_model) {
    var output_text = json_data[curr_constraint][curr_data]['model_output'][curr_model]['suggestion'];
    var keyword_success = json_data[curr_constraint][curr_data]['model_output'][curr_model]['keyword_success'];
    var wordlen_success = json_data[curr_constraint][curr_data]['model_output'][curr_model]['wordlen_success'];
    var mturk_score = json_data[curr_constraint][curr_data]['model_output'][curr_model]['mturk_score'];
    if (keyword_success == 1) {
        $(".badge.text-bg-success.keyword").removeClass("hidden");
        $(".badge.text-bg-danger.keyword").addClass("hidden");
    } else {
        $(".badge.text-bg-success.keyword").addClass("hidden");
        $(".badge.text-bg-danger.keyword").removeClass("hidden");
    }
    if (wordlen_success == 1) {
        $(".badge.text-bg-success.wordlen").removeClass("hidden");
        $(".badge.text-bg-danger.wordlen").addClass("hidden");
    } else {
        $(".badge.text-bg-success.wordlen").addClass("hidden");
        $(".badge.text-bg-danger.wordlen").removeClass("hidden");
    }
    $("#subtitle-infix").text(output_text);
    $("#subtitle-mturk").text(mturk_score.toString());
}