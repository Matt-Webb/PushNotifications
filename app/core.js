    
    var _roost = _roost || [];
    
    _roost.push(['onresult', function(data) {
        
        if (data) {		
        		var segments = "";
                for(var i = 0; i < data.tags.length; i++) {
                	segments += data.tags[i] + "|";
                };
                window.roostTags = segments;
        } else {
        		window.roostTags = "blank";
        }

        if (!data.firstTime) {
            window.roostFirstTime = false;
        } else {
        	window.roostFirstTime = true;
        }



    }]);

    _roost.push(["segments", "Football", "Tennis"]);


    window.addRoostSegment = function(segments) {
        alert("adding roost segments");
    };

    function removeRoostSegment(segment) {
        alert("remobed roost segment");
    };