$(document).ready(
    function () {

        //add event handlers
        $("#tabs a").click(showTab);
        $("#next").click(nextTab);
        $("#back").click(backTab);
        $("#submit").click(formSubmit);

        //all other functions (program logic)
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
        //move to next tab
        function nextTab(){
            event.preventDefault();
            $("#deliveryNav").tab("show");
        }
        function backTab(){
            event.preventDefault();
            $("#pickerNav").tab("show");
        }


        //calculate price and confirm pizza config and user address
        function formSubmit(){
            event.preventDefault();
            //show pizza config to user
            //get pizza values
            var size = $("input[name='size']:checked").val();
            var crust = $("input[name='crust']:checked").val();
            var meat = [];
            var veggies = []

            //make ingredient arrays, and create strings
            $.each($("input[name='meat']:checked"), function(){
                meat.push($(this).val());
            });
            $.each($("input[name='veggies']:checked"), function(){
                veggies.push($(this).val());
            });

            //put ingredient values into a string
            var meatString = "";
            var veggieString = "";

            var i;
            for(i = 0; i < meat.length; i++){
                meatString += meat[i] + ", ";
            }
            for(i = 0; i < veggies.length; i++){
                veggieString += veggies[i] + ", ";
            }

            meatString = meatString.slice(0, [meatString.length - 2]);
            veggieString = veggieString.slice(0, [veggieString.length - 2]);

            $("#sizeOutput").text(size);
            $("#crustOutput").text(crust);
            $("#meatOutput").text(meatString);
            $("#veggieOutput").text(veggieString)

            //calculate price and display receipt
            var meatCost = meat.length * 1.5;
            var veggieCost = veggies.length;
            var sizeCost = 0;

            switch (size){
                case "small":
                    sizeCost = 7;
                    break;
                case "normal":
                    sizeCost = 9;
                    break;
                case "large":
                    sizeCost = 12;
                    break;
            }

            var totalCost = meatCost + veggieCost + sizeCost;

            //output price to user
            $("#pizzaOutput").text(size);
            $("#pizzaPrice").text((sizeCost).toFixed(2));
            $("#meatNumber").text("meat x" + meat.length);
            $("#meatPrice").text((meatCost).toFixed(2));
            $("#veggieNumber").text("veggies x" + veggies.length);
            $("#veggiePrice").text((veggieCost).toFixed(2));
            $("#totalPrice").text((totalCost).toFixed(2));

            //show user address
            var address1 = $("#streetOne").val();
            var address2 = $("#streetTwo").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zip = $("#zipcode").val();
            var phone = $("#phonenumber").val();
            var email = $("#email").val();

            $("#addressOutput").text(address1);
            $("#addressTwoOutput").text(address2)
            $("#cityOutput").text(city);
            $("#stateOutput").text(state);
            $("#zipOutput").text(zip);
            $("#phoneOutput").text(phone);
            $("#emailOutput").text(email);
            //get users pizza choices
            //calculate prices
            $("#reviewNav").tab("show");
        }
    }
)