(function(global) {
    function EZVersion(version) {
        return new EZVersion.init(version)
    }

    EZVersion.init = function(version) {
        var v = EZVersion.normalizeVersion(version)

        if (v) {
            this.version = v

            v = v.split('.')

            // version number (http://semver.org/)
            this.major = v[0]
            this.minor = v[1]
            this.patch = v[2]
        } else {
            throw new Error('invalid arguments: ', arguments)
        }
    }

    EZVersion.normalizeVersion = function(version) {
        let match = String(version).match(/(\d+\.\d+.\d).*/)
        return match ? match[1] : null
    }

    EZVersion.init.prototype = EZVersion.prototype = {
        constructor: EZVersion,
        // greater than
        gt: function(version) {
            if (typeof version === 'string') {
                version = EZVersion(version)
            }

            if (!version instanceof EZVersion) {
                throw new Error('invalid arguments:', arguments)
            }

            var currentVersion = this.version.split('.')
            var targetVersion = version.version.split('.')
            var result = false

            for (var i = 0; i < currentVersion.length; i++) {
                if (currentVersion[i] > targetVersion[i]) {
                    result = true
                    break
                }
            }

            return result
        },
        equal: function(version) {
            if (typeof version === 'string') {

                return this.version === version
            } else if (version instanceof EZVersion) {

                return this.version === version.version
            } else {

                throw new Error('invalid arguments:', arguments)
            }
        },
        // less than
        lt: function(version) {
            return !this.gt(version)
        },
        // greater than or equal
        gte: function(version) {
            return this.gt(version) || this.equal(version)
        },
        // less than or equal
        lte: function(version) {
            return this.lt(version) || this.equal(version)
        }
    }

    global.EZVersion = EZVersion

})(this)
