$(document).ready(() => {
    $('#productType').change(function() {
        switch (this.value) {
            case '0':
                $('#attributes').html(`
                    <label for="size">Size (MB)</label>
                    <input type="number" step="0.01" id="size" class="form-control" name="size" required>
                    <p>
                        Please Fill The Required Information For Your Product And Make Sure You Filled It Correctly.
                    </p>
                `);
                break;
            case '1':
                $('#attributes').html(`
                    <label for="weight">Weight (KG)</label>
                    <input type="number" step="0.01" id="weight" class="form-control" name="weight" required>
                    <p>
                        Please Fill The Required Information For Your Product And Make Sure You Filled It Correctly.
                    </p>
                `);
                break;

            case '2':
                $('#attributes').html(`
                    <label for="height">Height</label>
                    <input type="number" step="0.01" id="height" class="form-control" name="height" required>
                    <label for="width">Width</label>
                    <input type="number" step="0.01" id="width" class="form-control" name="width" required>
                    <label for="length">Length</label>
                    <input type="number" step="0.01" id="length" class="form-control" name="length" required>
                    <p>
                        Please Fill The Required Information For Your Product And Make Sure You Filled It Correctly.
                    </p>
                `);
                break;
        }
    });

    $('form').submit(function(e) 
    {
        e.preventDefault();

        let inputs = {};
        $(this).find(':input').each(function() {
            inputs[$(this).attr("name")] = $(this).val();
        });

        $.post('/products/add', inputs, function(data, status) {
            $('#message').show().removeClass('alert-success alert-danger').addClass(`alert-${data.status}`).html(data.message);
        });
    });
});