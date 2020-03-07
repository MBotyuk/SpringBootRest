jQuery(document).ready(onPageLoad);

function onPageLoad() {
    jQuery.getJSON('http://localhost:8080/rest/admin', function (response) {
        console.log(response);
        var employee_data = '';
        jQuery.each(response, function (key, value) {
            employee_data += '<tr>';
            employee_data += '<td>' + value.id + '</td>';
            employee_data += '<td>' + value.name + '</td>';
            employee_data += '<td>' + value.email + '</td>';
            employee_data += '<td> <button class="btn btn-primary" data-toggle="modal" data-target="#editUser" ' +
                'data-user-id="' + value.id +
                '"}" id="btn_edit"> Edit </button>';
            employee_data += '<button class="btn btn-danger m-1" data-user-id="' +
                value.id + '" id="btn_delete"> Delete </button> </td>';
            employee_data += '</tr>';
        });

        jQuery('#tdata').append(employee_data);
    });
}

jQuery(document).on('click', '#btn_edit', function (e) {
    var id = e.target.getAttribute("data-user-id");
    jQuery.getJSON('http://localhost:8080/rest/admin/' + id, function (response) {
        console.log(response);
        jQuery('#form-id').val(response.id);
        jQuery('#form-name').val(response.name);
        jQuery('#form-email').val(response.email);
    });
});

jQuery('#form-save').on('click', function (e) {
    jQuery.ajax({
        method: "PUT",
        url: "/rest/admin/" + jQuery('#form-role').val(),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            id: jQuery('#form-id').val(),
            name: jQuery('#form-name').val(),
            email: jQuery('#form-email').val(),
            password: jQuery('#form-password').val(),

        }),
        success: function () {
            jQuery('#tdata').empty();
            onPageLoad();
        }
    }).done();
});

jQuery(document).on('click', '#btn_delete', function (e) {
    var id = e.target.getAttribute("data-user-id");
    jQuery.ajax({
        method: "DELETE",
        url: "/rest/admin/" + id,
        success: function () {
            jQuery('#tdata').empty();
            onPageLoad();
        }
    }).done();
});

jQuery(document).on('click', '#btn_new', function (e) {
    jQuery.ajax({
        method: "POST",
        url: "/rest/admin/" + jQuery('#form-new-role').val(),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            name: jQuery('#form-new-name').val(),
            email: jQuery('#form-new-email').val(),
            password: jQuery('#form-new-password').val(),

        }),
        success: function () {
            jQuery('#tdata').empty();
            onPageLoad();
        }
    }).done();
    jQuery('#form-new-name').val("");
    jQuery('#form-new-email').val("");
    jQuery('#form-new-password').val("");
});