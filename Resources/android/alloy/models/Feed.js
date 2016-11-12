var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        parentNode: function(data) {
            var entries = [];
            print_json(data);
            _.each(data, function(_entry) {
                var entry = {};
                var entry_getId = function() {
                    resultado = _entry.id;
                    return resultado;
                };
                var entry_getTitle = function() {
                    resultado = _entry.title;
                    return resultado;
                };
                var entry_getDescription = function() {
                    resultado = _entry.description;
                    return resultado;
                };
                var entry_getSubdescription = function() {
                    resultado = _entry.subdescription;
                    return resultado;
                };
                var entry_getDocument = function() {
                    resultado = _entry.document;
                    return resultado;
                };
                var entry_getIconUrl = function() {
                    resultado = _entry.iconUrl;
                    return resultado;
                };
                entry.id = entry_getId();
                entry.title = entry_getTitle();
                entry.description = entry_getDescription();
                entry.subdescription = entry_getSubdescription();
                entry.document = entry_getDocument();
                entry.iconUrl = entry_getIconUrl();
                entries.push(entry);
            });
            return entries;
        },
        columns: {
            id: "integer",
            title: "text",
            description: "text",
            subdescription: "text",
            document: "text",
            iconUrl: "text"
        },
        defaults: {
            id: 0,
            titulo: "",
            descripcion: "",
            subdescription: "",
            document: "",
            iconUrl: ""
        },
        URL: WS_GET_FEED,
        debug: 0,
        useStrictValidation: 0,
        adapter: {
            type: "sqlrest",
            collection_name: "feed",
            idAttribute: "id"
        },
        deleteAllOnFetch: true
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("feed", exports.definition, []);

collection = Alloy.C("feed", exports.definition, model);

exports.Model = model;

exports.Collection = collection;