jQuery(document).ready(function($) {

    var table_data_a = [];
    var comma_separated_numbers_regex = /^(\s*(\d+\s*,\s*)+\d+\s*|\s*\d+\s*)$/;
    var hex_rgb_regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

    //Save the data attributes of all the tables in the table_data_a array of objects
    $('.dalt-table').each(function(index){

        var table_obj = new Object();

        table_obj.id = $(this).attr("id");

        //sorting options
        table_obj.enable_sorting = $(this).data("enable-sorting");
        table_obj.enable_manual_sorting = $(this).data("enable-manual-sorting");
        table_obj.show_position = $(this).data("show-position");
        table_obj.position_side = $(this).data("position-side");
        table_obj.position_label = $(this).data("position-label");
        table_obj.number_format = $(this).data("number-format");
        table_obj.order_desc_asc_1 = $(this).data("order-desc-asc-1");
        table_obj.order_by_1 = $(this).data("order-by-1");
        table_obj.order_data_type_1 = $(this).data("order-data-type-1");
        table_obj.order_date_format_1 = $(this).data("order-date-format-1");
        table_obj.order_desc_asc_2 = $(this).data("order-desc-asc-2");
        table_obj.order_by_2 = $(this).data("order-by-2");
        table_obj.order_data_type_2 = $(this).data("order-data-type-2");
        table_obj.order_date_format_2 = $(this).data("order-date-format-2");
        table_obj.order_desc_asc_3 = $(this).data("order-desc-asc-3");
        table_obj.order_by_3 = $(this).data("order-by-3");
        table_obj.order_data_type_3 = $(this).data("order-data-type-3");
        table_obj.order_date_format_3 = $(this).data("order-date-format-3");
        table_obj.order_desc_asc_4 = $(this).data("order-desc-asc-4");
        table_obj.order_by_4 = $(this).data("order-by-4");
        table_obj.order_data_type_4 = $(this).data("order-data-type-4");
        table_obj.order_date_format_4 = $(this).data("order-date-format-4");
        table_obj.order_desc_asc_5 = $(this).data("order-desc-asc-5");
        table_obj.order_by_5 = $(this).data("order-by-5");
        table_obj.order_data_type_5 = $(this).data("order-data-type-5");
        table_obj.order_date_format_5 = $(this).data("order-date-format-5");

        //style options
        table_obj.table_width = $(this).data("table-width");
        table_obj.table_width_value = $(this).data("table-width-value");
        table_obj.table_minimum_width = $(this).data("table-minimum-width");
        table_obj.table_margin_top = $(this).data("table-margin-top");
        table_obj.table_margin_bottom = $(this).data("table-margin-bottom");
        table_obj.enable_container = $(this).data("enable-container");
        table_obj.container_width = $(this).data("container-width");
        table_obj.container_height = $(this).data("container-height");
        table_obj.header_font_size = $(this).data("header-font-size");
        table_obj.header_font_family = $(this).data("header-font-family");
        table_obj.header_font_weight = $(this).data("header-font-weight");
        table_obj.header_font_style = $(this).data("header-font-style");
        table_obj.header_background_color = $(this).data("header-background-color");
        table_obj.header_font_color = $(this).data("header-font-color");
        table_obj.header_link_color = $(this).data("header-link-color");
        table_obj.header_border_color = $(this).data("header-border-color");
        table_obj.header_position_alignment = $(this).data("header-position-alignment");
        table_obj.body_font_size = $(this).data("body-font-size");
        table_obj.body_font_family = $(this).data("body-font-family");
        table_obj.body_font_weight = $(this).data("body-font-weight");
        table_obj.body_font_style = $(this).data("body-font-style");
        table_obj.even_rows_background_color = $(this).data("even-rows-background-color");
        table_obj.odd_rows_background_color = $(this).data("odd-rows-background-color");
        table_obj.even_rows_font_color = $(this).data("even-rows-font-color");
        table_obj.even_rows_link_color = $(this).data("even-rows-link-color");
        table_obj.odd_rows_font_color = $(this).data("odd-rows-font-color");
        table_obj.odd_rows_link_color = $(this).data("odd-rows-link-color");
        table_obj.rows_border_color = $(this).data("rows-border-color");

        //autocolors options
        table_obj.autocolors_priority = $(this).data("autocolors-priority");
        table_obj.autocolors_affected_rows_1 = $(this).data("autocolors-affected-rows-1").toString();
        table_obj.autocolors_rows_background_color_1 = $(this).data("autocolors-rows-background-color-1");
        table_obj.autocolors_rows_font_color_1 = $(this).data("autocolors-rows-font-color-1");
        table_obj.autocolors_affected_rows_2 = $(this).data("autocolors-affected-rows-2").toString();
        table_obj.autocolors_rows_background_color_2 = $(this).data("autocolors-rows-background-color-2");
        table_obj.autocolors_rows_font_color_2 = $(this).data("autocolors-rows-font-color-2");
        table_obj.autocolors_affected_rows_3 = $(this).data("autocolors-affected-rows-3").toString();
        table_obj.autocolors_rows_background_color_3 = $(this).data("autocolors-rows-background-color-3");
        table_obj.autocolors_rows_font_color_3 = $(this).data("autocolors-rows-font-color-3");
        table_obj.autocolors_affected_rows_4 = $(this).data("autocolors-affected-rows-4").toString();
        table_obj.autocolors_rows_background_color_4 = $(this).data("autocolors-rows-background-color-4");
        table_obj.autocolors_rows_font_color_4 = $(this).data("autocolors-rows-font-color-4");
        table_obj.autocolors_affected_rows_5 = $(this).data("autocolors-affected-rows-5").toString();
        table_obj.autocolors_rows_background_color_5 = $(this).data("autocolors-rows-background-color-5");
        table_obj.autocolors_rows_font_color_5 = $(this).data("autocolors-rows-font-color-5");
        table_obj.autocolors_affected_columns_1 = $(this).data("autocolors-affected-columns-1").toString();
        table_obj.autocolors_columns_background_color_1 = $(this).data("autocolors-columns-background-color-1");
        table_obj.autocolors_columns_font_color_1 = $(this).data("autocolors-columns-font-color-1");
        table_obj.autocolors_affected_columns_2 = $(this).data("autocolors-affected-columns-2").toString();
        table_obj.autocolors_columns_background_color_2 = $(this).data("autocolors-columns-background-color-2");
        table_obj.autocolors_columns_font_color_2 = $(this).data("autocolors-columns-font-color-2");
        table_obj.autocolors_affected_columns_3 = $(this).data("autocolors-affected-columns-3").toString();
        table_obj.autocolors_columns_background_color_3 = $(this).data("autocolors-columns-background-color-3");
        table_obj.autocolors_columns_font_color_3 = $(this).data("autocolors-columns-font-color-3");
        table_obj.autocolors_affected_columns_4 = $(this).data("autocolors-affected-columns-4").toString();
        table_obj.autocolors_columns_background_color_4 = $(this).data("autocolors-columns-background-color-4");
        table_obj.autocolors_columns_font_color_4 = $(this).data("autocolors-columns-font-color-4");
        table_obj.autocolors_affected_columns_5 = $(this).data("autocolors-affected-columns-5").toString();
        table_obj.autocolors_columns_background_color_5 = $(this).data("autocolors-columns-background-color-5");
        table_obj.autocolors_columns_font_color_5 = $(this).data("autocolors-columns-font-color-5");

        //autoalignment options
        table_obj.autoalignment_priority = $(this).data("autoalignment-priority");
        table_obj.autoalignment_affected_rows_left = $(this).data("autoalignment-affected-rows-left").toString();
        table_obj.autoalignment_affected_rows_center = $(this).data("autoalignment-affected-rows-center").toString();
        table_obj.autoalignment_affected_rows_right = $(this).data("autoalignment-affected-rows-right").toString();
        table_obj.autoalignment_affected_columns_left = $(this).data("autoalignment-affected-columns-left").toString();
        table_obj.autoalignment_affected_columns_center = $(this).data("autoalignment-affected-columns-center").toString();
        table_obj.autoalignment_affected_columns_right = $(this).data("autoalignment-affected-columns-right").toString();

        //responsive options
        table_obj.tablet_breakpoint = $(this).data("tablet-breakpoint");
        table_obj.hide_tablet_list = $(this).data("hide-tablet-list").toString();
        table_obj.tablet_header_font_size = $(this).data("tablet-header-font-size");
        table_obj.tablet_body_font_size = $(this).data("tablet-body-font-size");
        table_obj.tablet_hide_images = $(this).data("tablet-hide-images");
        table_obj.phone_breakpoint = $(this).data("phone-breakpoint");
        table_obj.hide_phone_list = $(this).data("hide-phone-list").toString();
        table_obj.phone_header_font_size = $(this).data("phone-header-font-size");
        table_obj.phone_body_font_size = $(this).data("phone-body-font-size");
        table_obj.phone_hide_images = $(this).data("phone-hide-images");

        //advanced options
        table_obj.enable_cell_properties = $(this).data("enable-cell-properties");

        table_data_a[index] = table_obj;

    });

    /*
     * Loop trough all the objects available in teh table_data_a array of objects. Each object includes the identifier
     * of the table and all the data attributes.
     */
    $.each(table_data_a, function( index, table_obj ) {

        //sorting options ----------------------------------------------------------------------------------------------

        //initialize tablesorter if the "Enable Sorting" option is true
        if( parseInt(table_obj.enable_sorting, 10) == 1 ){

            var sortList = [];

            //apply the sorting option to the 5 priority levels
            for(i=1;i<=5;i++){

                //apply the sorting only if the "Order" option is not set to 0 (Disabled)
                if( parseInt(table_obj['order_desc_asc_' + i], 10) == 1 || parseInt(table_obj['order_desc_asc_' + i], 10) == 2 ){

                    //generate the value for the sortList option, used to determine the initial sort of the table
                    sortList.push([(table_obj['order_by_' + i] - 1), Math.abs(parseInt(table_obj['order_desc_asc_' + i], 10) - 2)]);

                    /*
                     * If the "Order Data Type" option is different from "Auto" add to the specific th element the
                     * "data-sorter" attribute to set the parser
                     *
                     * If the "Order Data Type" option is equal to "shortDate" add to the specific th element the
                     * "data-date-format" attribute to set the date format
                     */
                    if( table_obj["order_data_type_" + i] != 'auto' ){
                        $("#" + table_obj.id + " th:nth-child(" + table_obj['order_by_' + i] + ")" ).attr("data-sorter", table_obj['order_data_type_' + i]);
                        if(table_obj['order_data_type_' + i] == 'shortDate'){
                            $("#" + table_obj.id + " th:nth-child(" + table_obj['order_by_' + i] + ")" ).attr("data-date-format", table_obj['order_date_format_' + i]);
                        }
                    }

                }

            }

            var configuration = new Object();

            //define the configuration options -------------------------------------------------------------------------

            //set the intial sorting order
            configuration.sortList = sortList;

            //set the number format
            if( parseInt(table_obj.number_format, 10) == 1 ){
                configuration.usNumberFormat = true;
            }else{
                configuration.usNumberFormat = false;
            }

            //init tablesorter
            $("#" + table_obj.id).tablesorter(configuration);

            //enable or disable the manual sorting
            if( parseInt(table_obj.enable_manual_sorting, 10) == 0 ){
                //disable the event used to trigger the manual sorting
                $( "#" + table_obj.id +" > thead th").off();
            }else{
                //set the mouse cursor to pointer
                $( "#" + table_obj.id +" > thead th").addClass('dalt-cursor-pointer');
            }

        }

        //generate the position column
        if( parseInt(table_obj.show_position, 10) == 1 ){

            if(table_obj.position_side == 'left'){

                //Generate the position column on the left side of the table -------------------------------------------

                //add a "th" element with the "Position Label" as the content in the "table > thead > tr" element
                if( parseInt(table_obj.enable_sorting, 10) == 1 ){
                    //include the <div> to maintain a DOM structure similar to the one of the other header cells
                    $('#' + table_obj.id + ' > thead > tr').prepend('<th><div>' + table_obj.position_label + '</div></th>');
                }else{
                    //do not include the <div> to maintain a DOM structure similar to the one of the other header cells
                    $('#' + table_obj.id + ' > thead > tr').prepend('<th>' + table_obj.position_label + '</th>');
                }

                //add the "td" element as the first child of each "table > tbody > tr" element
                $('#' + table_obj.id + ' > tbody > tr').each(function(index){
                    $(this).prepend('<td>' + (index + 1) + '</td>');
                });

            }else{

                //Generate the position column on the right side of the table ------------------------------------------

                //add a "th" element with the "Position Label" as the content in the "table > thead > tr" element
                if( parseInt(table_obj.enable_sorting, 10) == 1 ){
                    //include the <div> to maintain a DOM structure similar to the one of the other header cells
                    $('#' + table_obj.id + ' > thead > tr').append('<th><div>' + table_obj.position_label + '</div></th>');
                }else{
                    //do not include the <div> to maintain a DOM structure similar to the one of the other header cells
                    $('#' + table_obj.id + ' > thead > tr').append('<th>' + table_obj.position_label + '</th>');
                }

                //add the "td" element as the first child of each "table > tbody > tr" element
                $('#' + table_obj.id + ' > tbody > tr').each(function(index){
                    $(this).append('<td>' + (index + 1) + '</td>');
                });

            }



        }

        //style options ------------------------------------------------------------------------------------------------

        //Table Width
        switch(parseInt(table_obj.table_width, 10)){
            case 0:
                $('#' + table_obj.id).css('width', '100%');
                break;
            case 1:
                $('#' + table_obj.id).css('width', 'auto');
                break;
            case 2:
                $('#' + table_obj.id).css('width', table_obj.table_width_value + 'px');
                break;
        }

        //Table Minimum Width
        $('#' + table_obj.id).css('min-width', table_obj.table_minimum_width + 'px');

        //If the container is enabled apply it with the related styles, otherwise apply only the margin to the table
        if(parseInt(table_obj.enable_container) == 1){

            //If the container is enabled apply the two margins to the container
            $('#' + table_obj.id).parent().css('margin-top', table_obj.table_margin_top + 'px');
            $('#' + table_obj.id).parent().css('margin-bottom', table_obj.table_margin_bottom + 'px');

            //Container Width
            if(parseInt(table_obj.container_width, 10) > 0){
                $('#' + table_obj.id).parent().css('width', table_obj.container_width + 'px');
            }else{
                $('#' + table_obj.id).parent().css('width', 'auto');
            }

            //Container Height
            if(parseInt(table_obj.container_height, 10) > 0){
                $('#' + table_obj.id).parent().css('height', table_obj.container_height + 'px');
            }else{
                $('#' + table_obj.id).parent().css('height', 'auto');
            }

        }else{

            //If the container is not enabled apply the two margins to the table
            $('#' + table_obj.id).css('margin-top', table_obj.table_margin_top + 'px');
            $('#' + table_obj.id).css('margin-bottom', table_obj.table_margin_bottom + 'px');

        }

        //Header Cells Padding based on the Header Font Size
        var vertical_padding = Math.round(0.636363 * table_obj.header_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.header_font_size) + 'px';
        $('#' + table_obj.id + ' th').css('padding', vertical_padding + ' ' + horizontal_padding);

        //Image Height - Based on the Header Font size
        var image_height = Math.round(1.545454 * table_obj.header_font_size) + 'px';
        $('#' + table_obj.id + ' th img.dalt-image-left, #' + table_obj.id + ' th img.dalt-image-right').css('height', image_height);

        //Image Left - Margin based on the Header Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.header_font_size) + 'px 0 0';
        $('#' + table_obj.id + ' th img.dalt-image-left').css('margin', margin);

        //Image Right - Margin based on the Header Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.header_font_size) + 'px';
        $('#' + table_obj.id + ' th img.dalt-image-right').css('margin', margin);

        /*
         * If the sorting is enabled Tablesorter adds a <div> as the child of the <th> element, for this reason some CSS
         * rules should be applied to different selectors.
         */
        if( parseInt(table_obj.enable_sorting, 10) == 1 ){

            //Line Height based on the Header Font Size
            var line_height = Math.round(1.454545 * table_obj.header_font_size) + 'px';
            $('#' + table_obj.id + ' th > div').css('line-height', line_height);

            //Header Font Size
            $('#' + table_obj.id + ' th > div').css('font-size', table_obj.header_font_size + 'px');

            //Header Font Family
            $('#' + table_obj.id + ' th > div').css('font-family', table_obj.header_font_family);

            //Header Font Weight
            $('#' + table_obj.id + ' th > div').css('font-weight', table_obj.header_font_weight);

            //Header Font Style
            $('#' + table_obj.id + ' th > div').css('font-style', table_obj.header_font_style);

            //Header Font Color
            $('#' + table_obj.id + ' th > div').css('color', table_obj.header_font_color);

            //Header Link Color
            $('#' + table_obj.id + ' th > div a').css('color', table_obj.header_link_color);

        }else{

            //Line Height based on the Header Font Size
            var line_height = Math.round(1.454545 * table_obj.header_font_size) + 'px';
            $('#' + table_obj.id + ' th').css('line-height', line_height);

            //Header Font Size
            $('#' + table_obj.id + ' th').css('font-size', table_obj.header_font_size + 'px');

            //Header Font Family
            $('#' + table_obj.id + ' th').css('font-family', table_obj.header_font_family);

            //Header Font Weight
            $('#' + table_obj.id + ' th').css('font-weight', table_obj.header_font_weight);

            //Header Font Style
            $('#' + table_obj.id + ' th').css('font-style', table_obj.header_font_style);

            //Header Font Color
            $('#' + table_obj.id + ' th').css('color', table_obj.header_font_color);

            //Header Link Color
            $('#' + table_obj.id + ' th a').css('color', table_obj.header_link_color);

        }

        //Header Background Color
        $('#' + table_obj.id + ' th').css('background-color', table_obj.header_background_color);

        //Header Border Color
        $('#' + table_obj.id + ' th').css('border-color', table_obj.header_border_color);

        //Header Position Alignment
        if(parseInt(table_obj.show_position, 10) == 1){
            if(table_obj.position_side == 'left'){
                $('#' + table_obj.id + ' th').first().css('text-align', table_obj.header_position_alignment);
            }else{
                $('#' + table_obj.id + ' th').last().css('text-align', table_obj.header_position_alignment);
            }
        }

        //Body Font Size
        $('#' + table_obj.id + ' td').css('font-size', table_obj.body_font_size);

        //Body Cells Padding based on the Body Font Size
        var vertical_padding = Math.round(0.272727 * table_obj.body_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.body_font_size) + 'px';
        $('#' + table_obj.id + ' td').css('padding', vertical_padding + ' ' + horizontal_padding);

        //Line Height based on the Body Font Size
        var line_height = Math.round(1.545454 * table_obj.body_font_size) + 'px';
        $('#' + table_obj.id + ' td').css('line-height', line_height);

        //Image Height - Based on the Body Font size
        var image_height = Math.round(1.545454 * table_obj.body_font_size) + 'px';
        $('#' + table_obj.id + ' td img.dalt-image-left, #' + table_obj.id + ' td img.dalt-image-right').css('height', image_height);

        //Image Left - Margin based on the Body Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.body_font_size) + 'px 0 0';
        $('#' + table_obj.id + ' td img.dalt-image-left').css('margin', margin);

        //Image Right - Margin based on the Body Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.body_font_size) + 'px';
        $('#' + table_obj.id + ' td img.dalt-image-right').css('margin', margin);

        //Body Font Family
        $('#' + table_obj.id + ' td').css('font-family', table_obj.body_font_family);

        //Body Font Weight
        $('#' + table_obj.id + ' td').css('font-weight', table_obj.body_font_weight);

        //Body Font Style
        $('#' + table_obj.id + ' td').css('font-style', table_obj.body_font_style);

        //Even Rows Background Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(even) td{background-color: ' + table_obj.even_rows_background_color + ';}</style>');

        //Even Rows Font Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(even) td{color: ' + table_obj.even_rows_font_color + ';}</style>');

        //Even Rows Link Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(even) td a{color: ' + table_obj.even_rows_link_color + ';}</style>');

        //Odd Rows Background Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(odd) td{background-color: ' + table_obj.odd_rows_background_color + ';}</style>');

        //Odd Rows Font Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(odd) td{color: ' + table_obj.odd_rows_font_color + ';}</style>');

        //Odd Rows Link Color
        $('head').append('<style type="text/css">' + '\#' + table_obj.id + ' tr:nth-child(odd) td a{color: ' + table_obj.odd_rows_link_color + ';}</style>');

        //Rows Border Color
        $('#' + table_obj.id + ' td').css('border-color', table_obj.rows_border_color);

        //Autocolors options -------------------------------------------------------------------------------------------
        if(table_obj.autocolors_priority == 'columns'){
            //Columns has the priority
            apply_autocolors_on_rows(table_obj);
            apply_autocolors_on_columns(table_obj);
        }else{
            //Rows has the priority
            apply_autocolors_on_columns(table_obj);
            apply_autocolors_on_rows(table_obj);
        }

        //Autoalignment options ----------------------------------------------------------------------------------------
        if(table_obj.autoalignment_priority == 'columns'){
            //Columns has the priority
            apply_autoalignment_on_rows(table_obj);
            apply_autoalignment_on_columns(table_obj);
        }else{
            //Rows has the priority
            apply_autoalignment_on_columns(table_obj);
            apply_autoalignment_on_rows(table_obj);
        }

        //responsive options -------------------------------------------------------------------------------------------

        //Tablet

        //generate an array from the table_obj.hidden_columns_tablet string
        var hide_tablet_list_a = table_obj.hide_tablet_list.split(',');

        //init css rule
        var hidden_cells = '';

        //generate the selectors of the css rule by using the values included in the hidden_columns_tablet_a array
        $.each(hide_tablet_list_a, function( index, value ) {
            hidden_cells += '#' + table_obj.id + ' tr th:nth-child(' + value + '),';
            hidden_cells += '#' + table_obj.id + ' tr td:nth-child(' + value + ')';
            if(hide_tablet_list_a.length > (index + 1)){hidden_cells += ',';}
        });

        //complete the css rule with the declaration block
        if(hidden_cells.length > 0){hidden_cells += '{display: none;}'}

        //set the font size for table cells in the header
        var header_font_size_cells = '#' + table_obj.id + ' tr th, #' + table_obj.id + ' tr th div{font-size: ' + table_obj.tablet_header_font_size+ 'px !important}';

        //set the padding for the table cells in the header
        var vertical_padding = Math.round(0.636363 * table_obj.tablet_header_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.tablet_header_font_size) + 'px';
        var header_padding_cells = '#' + table_obj.id + ' tr th{padding: ' + vertical_padding + ' ' + horizontal_padding + ' !important}';

        //Image Height - Based on the Header Font size
        var image_height_value = Math.round(1.545454 * table_obj.tablet_header_font_size) + 'px';
        var header_image_height = '#' + table_obj.id + ' th img.dalt-image-left, #' + table_obj.id + ' th img.dalt-image-right{height: ' + image_height_value + ' !important}';

        //Image Left - Margin based on the Header Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.tablet_header_font_size) + 'px 0 0';
        var header_image_left_margin = '#' + table_obj.id + ' th img.dalt-image-left{margin: ' + margin + ' !important;}';

        //Image Right - Margin based on the Header Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.tablet_header_font_size) + 'px';
        var header_image_right_margin = '#' + table_obj.id + ' th img.dalt-image-right{margin: ' + margin + ' !important;}';

        //Line Height based on the Header Font Size
        var line_height_value = Math.round(1.454545 * table_obj.tablet_header_font_size) + 'px';
        if( parseInt(table_obj.enable_sorting, 10) == 1 ) {
            var header_line_height = '#' + table_obj.id + ' th > div{line-height: ' + line_height_value + ' !important;}';
        }else{
            var header_line_height = '#' + table_obj.id + ' th{line-height: ' + line_height_value + ' !important;}';
        }

        //set the font size for table cells in the body
        var body_font_size_cells = '#' + table_obj.id + ' tr td{font-size: ' + table_obj.tablet_body_font_size+ 'px !important}';

        //set the padding for the table cells in the body
        var vertical_padding = Math.round(0.272727 * table_obj.tablet_body_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.tablet_body_font_size) + 'px';
        var body_padding_cells = '#' + table_obj.id + ' tr td{padding: ' + vertical_padding + ' ' + horizontal_padding + ' !important}';

        //Line Height based on the Body Font Size
        var line_height_value = Math.round(1.545454 * table_obj.tablet_body_font_size) + 'px';
        var body_line_height = '#' + table_obj.id + ' td{line-height: ' + line_height_value + ' !important;}';

        //Image Height - Based on the Body Font size
        var image_height_value = Math.round(1.545454 * table_obj.tablet_body_font_size) + 'px';
        var body_image_height = '#' + table_obj.id + ' td img.dalt-image-left, #' + table_obj.id + ' td img.dalt-image-right{height: ' + image_height_value + ' !important}';

        //Image Left - Margin based on the Body Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.tablet_body_font_size) + 'px 0 0';
        var body_image_left_margin = '#' + table_obj.id + ' td img.dalt-image-left{margin: ' + margin + ' !important;}';

        //Image Right - Margin based on the Body Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.tablet_body_font_size) + 'px';
        var body_image_right_margin = '#' + table_obj.id + ' td img.dalt-image-right{margin: ' + margin + ' !important;}';

        //append the media query with the css rule in the head
        $('head').append('<style type="text/css">@media all and (max-width: ' + table_obj.tablet_breakpoint + 'px){' + hidden_cells + header_font_size_cells + header_padding_cells + header_image_height + header_image_left_margin + header_image_right_margin + header_line_height + body_font_size_cells + body_padding_cells + body_line_height + body_image_height + body_image_left_margin + body_image_right_margin + '} </style>');

        //tablet hide images
        if(parseInt(table_obj.tablet_hide_images) == 1){
            $('head').append('<style type="text/css">@media all and (max-width: ' + table_obj.tablet_breakpoint + 'px){\#' + table_obj.id + ' img{ display: none !important;}}</style>');
        }

        //Phone

        //generate an array from table_obj.hidden_columns_phone string
        var hide_phone_list_a = table_obj.hide_phone_list.split(',');

        //init css rule
        var hidden_cells = '';

        //generate the selectors of the css rule by using the values included in the hidden_columns_phone_a array
        $.each(hide_phone_list_a, function( index, value ) {
            hidden_cells += '#' + table_obj.id + ' tr th:nth-child(' + value + '),';
            hidden_cells += '#' + table_obj.id + ' tr td:nth-child(' + value + ')';
            if(hide_phone_list_a.length > (index + 1)){hidden_cells += ',';}
        });

        //complete the css rule with the declaration block
        if(hidden_cells.length > 0){hidden_cells += '{display: none;}'}

        //set the font size for table cells in the header
        var header_font_size_cells = '#' + table_obj.id + ' tr th, #' + table_obj.id + ' tr th div{font-size: ' + table_obj.phone_header_font_size + 'px !important}';

        //set the padding for the table cells in the header
        var vertical_padding = Math.round(0.636363 * table_obj.phone_header_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.phone_header_font_size) + 'px';
        var header_padding_cells = '#' + table_obj.id + ' tr th{padding: ' + vertical_padding + ' ' + horizontal_padding + ' !important}';

        //Image Height - Based on the Header Font size
        var image_height_value = Math.round(1.545454 * table_obj.phone_header_font_size) + 'px';
        var header_image_height = '#' + table_obj.id + ' th img.dalt-image-left, #' + table_obj.id + ' th img.dalt-image-right{height: ' + image_height_value + ' !important}';

        //Image Left - Margin based on the Header Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.phone_header_font_size) + 'px 0 0';
        var header_image_left_margin = '#' + table_obj.id + ' th img.dalt-image-left{margin: ' + margin + ' !important;}';

        //Image Right - Margin based on the Header Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.phone_header_font_size) + 'px';
        var header_image_right_margin = '#' + table_obj.id + ' th img.dalt-image-right{margin: ' + margin + ' !important;}';

        //Line Height based on the Header Font Size
        var line_height_value = Math.round(1.454545 * table_obj.phone_header_font_size) + 'px';
        if( parseInt(table_obj.enable_sorting, 10) == 1 ) {
            var header_line_height = '#' + table_obj.id + ' th > div{line-height: ' + line_height_value + ' !important;}';
        }else{
            var header_line_height = '#' + table_obj.id + ' th{line-height: ' + line_height_value + ' !important;}';
        }

        //set the font size for table cells in the body
        var body_font_size_cells = '#' + table_obj.id + ' tr td{font-size: ' + table_obj.phone_body_font_size + 'px !important}';

        //set the padding for the table cells in the body
        var vertical_padding = Math.round(0.272727 * table_obj.phone_body_font_size) + 'px';
        var horizontal_padding = Math.round(0.909090 * table_obj.phone_body_font_size) + 'px';
        var body_padding_cells = '#' + table_obj.id + ' tr td{padding: ' + vertical_padding + ' ' + horizontal_padding + ' !important}';

        //Line Height based on the Body Font Size
        var line_height_value = Math.round(1.545454 * table_obj.phone_body_font_size) + 'px';
        var body_line_height = '#' + table_obj.id + ' td{line-height: ' + line_height_value + ' !important;}';

        //Image Height - Based on the Body Font size
        var image_height_value = Math.round(1.545454 * table_obj.phone_body_font_size) + 'px';
        var body_image_height = '#' + table_obj.id + ' td img.dalt-image-left, #' + table_obj.id + ' td img.dalt-image-right{height: ' + image_height_value + ' !important}';

        //Image Left - Margin based on the Body Font Size
        var margin = '0 ' + Math.round(0.454545 * table_obj.phone_body_font_size) + 'px 0 0';
        var body_image_left_margin = '#' + table_obj.id + ' td img.dalt-image-left{margin: ' + margin + ' !important;}';

        //Image Right - Margin based on the Body Font Size
        var margin = '0 0 0 ' + Math.round(0.454545 * table_obj.phone_body_font_size) + 'px';
        var body_image_right_margin = '#' + table_obj.id + ' td img.dalt-image-right{margin: ' + margin + ' !important;}';

        //append the media query with the css rule in the head
        $('head').append('<style type="text/css">@media all and (max-width: ' + table_obj.phone_breakpoint + 'px){' + hidden_cells + header_font_size_cells + header_padding_cells + header_image_height + header_image_left_margin + header_image_right_margin + header_line_height + body_font_size_cells + body_padding_cells + body_line_height + body_image_height + body_image_left_margin + body_image_right_margin + '} </style>');

        //phone hide images
        if(parseInt(table_obj.phone_hide_images) == 1){
            $('head').append('<style type="text/css">@media all and (max-width: ' + table_obj.phone_breakpoint + 'px){\#' + table_obj.id + ' img{ display: none !important;}}</style>');
        }

        //cell properties ----------------------------------------------------------------------------------------------
        if(parseInt(table_obj.enable_cell_properties, 10) == 1){

            $('#' + table_obj.id + ' th, #' + table_obj.id + ' td').each(function(index){

                if( $(this).attr('data-cell-properties') == 'true' ){

                    //get the cell properties
                    var text_color = $(this).attr('data-text-color');
                    var background_color = $(this).attr('data-background-color');
                    var font_weight = $(this).attr('data-font-weight');
                    var font_style = $(this).attr('data-font-style');
                    var link_color = $(this).attr('data-link-color');
                    var alignment = $(this).attr('data-alignment');

                    //Background Color
                    if(background_color.match(hex_rgb_regex)){
                        $(this).css('background', background_color);
                    }

                    /*
                     * If the sorting is enabled Tablesorter adds a <div> as the child of the <th> element, for this
                     * reason in the header some CSS rules should be applied to different selectors.
                     */
                    if( $(this).is('th') && parseInt(table_obj.enable_sorting) == 1 ){
                        var target = $(this).children();
                    }else{
                        var target = $(this);
                    }

                    //Text Color
                    if(text_color.match(hex_rgb_regex)){
                        target.css('color', text_color);
                    }

                    //Font Weight
                    target.css('font-weight', font_weight);

                    //Font Style
                    target.css('font-style', font_style);

                    //Link Color
                    if(link_color.match(hex_rgb_regex)){
                        $(target).children('a').css('color', link_color);
                    }

                    //Alignment
                    target.css('text-align', alignment);

                }

            });

        }

        $('#' + table_obj.id).css('visibility', 'visible');

    });

    /*
     * Applies the autocolors of the rows for all the 5 priority levels
     */
    function apply_autocolors_on_rows(table_obj){

        //Priority 1
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_rows_1)) {
            var autocolors_affected_rows_1 = table_obj.autocolors_affected_rows_1.split(',');
            $.each(autocolors_affected_rows_1, function( index, value ) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('background-color', table_obj.autocolors_rows_background_color_1).css('color', table_obj.autocolors_rows_font_color_1);
            });
        }

        //Priority 2
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_rows_2)) {
            var autocolors_affected_rows_2 = table_obj.autocolors_affected_rows_2.split(',');
            $.each(autocolors_affected_rows_2, function (index, value) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('background-color', table_obj.autocolors_rows_background_color_2).css('color', table_obj.autocolors_rows_font_color_2);
            });
        }

        //Priority 3
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_rows_3)){
            var autocolors_affected_rows_3 = table_obj.autocolors_affected_rows_3.split(',');
            $.each(autocolors_affected_rows_3, function (index, value) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('background-color', table_obj.autocolors_rows_background_color_3).css('color', table_obj.autocolors_rows_font_color_3);
            });
        }

        //Priority 4
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_rows_4)) {
            var autocolors_affected_rows_4 = table_obj.autocolors_affected_rows_4.split(',');
            $.each(autocolors_affected_rows_4, function (index, value) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('background-color', table_obj.autocolors_rows_background_color_4).css('color', table_obj.autocolors_rows_font_color_4);
            });
        }

        //Priority 5
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_rows_5)) {
            var autocolors_affected_rows_5 = table_obj.autocolors_affected_rows_5.split(',');
            $.each(autocolors_affected_rows_5, function (index, value) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('background-color', table_obj.autocolors_rows_background_color_5).css('color', table_obj.autocolors_rows_font_color_5);
            });
        }

    }

    /*
     * Applies the autocolors of the columns for all the 5 priority levels
     */
    function apply_autocolors_on_columns(table_obj){

        //Priority 1
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_columns_1)) {
            var autocolors_affected_columns_1 = table_obj.autocolors_affected_columns_1.split(',');
            $.each(autocolors_affected_columns_1, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('background-color', table_obj.autocolors_columns_background_color_1).css('color', table_obj.autocolors_columns_font_color_1);
            });
        }

        //Priority 2
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_columns_2)) {
            var autocolors_affected_columns_2 = table_obj.autocolors_affected_columns_2.split(',');
            $.each(autocolors_affected_columns_2, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('background-color', table_obj.autocolors_columns_background_color_2).css('color', table_obj.autocolors_columns_font_color_2);
            });
        }

        //Priority 3
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_columns_3)) {
            var autocolors_affected_columns_3 = table_obj.autocolors_affected_columns_3.split(',');
            $.each(autocolors_affected_columns_3, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('background-color', table_obj.autocolors_columns_background_color_3).css('color', table_obj.autocolors_columns_font_color_3);
            });
        }

        //Priority 4
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_columns_4)) {
            var autocolors_affected_columns_4 = table_obj.autocolors_affected_columns_4.split(',');
            $.each(autocolors_affected_columns_4, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('background-color', table_obj.autocolors_columns_background_color_4).css('color', table_obj.autocolors_columns_font_color_4);
            });
        }

        //Priority 5
        if(comma_separated_numbers_regex.test(table_obj.autocolors_affected_columns_5)) {
            var autocolors_affected_columns_5 = table_obj.autocolors_affected_columns_5.split(',');
            $.each(autocolors_affected_columns_5, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('background-color', table_obj.autocolors_columns_background_color_5).css('color', table_obj.autocolors_columns_font_color_5);
            });
        }

    }

    /*
     * Applies the autoalignment of the rows for the "Left", "Center" and "Right" category.
     */
    function apply_autoalignment_on_rows(table_obj){

        //Left
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_rows_left)) {
            var autoalignment_affected_rows_left = table_obj.autoalignment_affected_rows_left.split(',');
            $.each(autoalignment_affected_rows_left, function( index, value ) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('text-align', 'left');
            });
        }

        //Center
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_rows_center)) {
            var autoalignment_affected_rows_center = table_obj.autoalignment_affected_rows_center.split(',');
            $.each(autoalignment_affected_rows_center, function( index, value ) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('text-align', 'center');
            });
        }

        //Right
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_rows_right)) {
            var autoalignment_affected_rows_right = table_obj.autoalignment_affected_rows_right.split(',');
            $.each(autoalignment_affected_rows_right, function( index, value ) {
                $('#' + table_obj.id + ' tr:nth-child(' + parseInt(value, 10) + ') td').css('text-align', 'right');
            });
        }

    }

    /*
     * Applies the autoalignment of the columns for the "Left", "Center" and "Right" category.
     */
    function apply_autoalignment_on_columns(table_obj){

        //Left
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_columns_left)) {
            var autoalignment_affected_columns_left = table_obj.autoalignment_affected_columns_left.split(',');
            $.each(autoalignment_affected_columns_left, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('text-align', 'left');
            });
        }

        //Center
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_columns_center)) {
            var autoalignment_affected_columns_center = table_obj.autoalignment_affected_columns_center.split(',');
            $.each(autoalignment_affected_columns_center, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('text-align', 'center');
            });
        }

        //Right
        if(comma_separated_numbers_regex.test(table_obj.autoalignment_affected_columns_right)) {
            var autoalignment_affected_columns_right = table_obj.autoalignment_affected_columns_right.split(',');
            $.each(autoalignment_affected_columns_right, function( index, value ) {
                $('#' + table_obj.id + ' tr td:nth-child('+ parseInt(value, 10) +')').css('text-align', 'right');
            });
        }

    }

});