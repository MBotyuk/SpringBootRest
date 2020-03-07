jQuery(document).ready(onPageLoadUser);

function onPageLoadUser() {
    jQuery.getJSON('http://localhost:8080/rest/user', function (responseEdit) {
        console.log(responseEdit);
        var employee_data = '';
        var li_if = '<a class="nav-link" href="/admin"}">Admin</a>';
        if (responseEdit.authorities[0].nameRole  == "ROLE_ADMIN") jQuery('#if').append(li_if);
            employee_data += '<tr>';
            employee_data += '<td>' + responseEdit.id + '</td>';
            employee_data += '<td>' + responseEdit.name + '</td>';
            employee_data += '<td>' + responseEdit.email + '</td>';
            employee_data += '</tr>';
        jQuery('#tdataUser').append(employee_data);
    });
}