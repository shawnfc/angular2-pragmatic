"use strict";
var AuthorsService = (function () {
    function AuthorsService() {
    }
    AuthorsService.prototype.getAuthors = function () {
        return ["Author 1", "Author 2", "Author 3"];
    };
    return AuthorsService;
}());
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map