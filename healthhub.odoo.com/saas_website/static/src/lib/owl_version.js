/** @odoo-module */

export function owl_version() {
    var owl_version;

    if (typeof owl !== "undefined" && owl.__info__.version) {
        owl_version = owl.__info__.version;
    }
    if (owl_version) {
        var parsed = owl_version.replace(/[^\d.]/g, '').split('.').map(function(x) {
            return parseInt(x);
        });
        return new OwlVersion(parsed[0], parsed[1], parsed[2]);
    }
    return new OwlVersion(0, 0, 0);
}

function OwlVersion(major, inter, minor) {
    this.major = major;
    this.inter = inter;
    this.minor = minor;
}
OwlVersion.prototype.check = function check(major, inter, minor) {
    return (this.major > major) ||
        (this.major === major && this.inter > inter) ||
        (this.major === major && this.inter === inter && this.minor >= (minor || 0));
};