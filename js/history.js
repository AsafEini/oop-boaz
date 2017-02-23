var Myhistory = (function() {
    function Myhistory() {
        this._historyForGoingBack = [];
        this._historyForGoingForward = [];
    }

    Myhistory.prototype.addToHistory = function (id) {
        this._historyForGoingBack.push(id);
    };

    Myhistory.prototype.getLastIdInHistory = function () {
        var targetId = this._historyForGoingBack.pop();
        return targetId;
    };
    return Myhistory;

        })();


