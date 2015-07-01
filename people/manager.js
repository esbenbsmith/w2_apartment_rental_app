function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;


  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property to properties array
  properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove property
for (var item in this) {
        if (this[item].property == property) {
            this.splice(item, 1);
            return true;
        }
    }
    return false;
  }
};