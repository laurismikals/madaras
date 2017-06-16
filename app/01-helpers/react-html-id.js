var _globallyUniqueIdCounter = 0

function resetUniqueIds() {
  _globallyUniqueIdCounter = 0
}

function injectUniqueness(component) {

  // Store all state in the closure for the member functions
  var willUpdate = component.componentWillUpdate
  var _htmlIds = {}
  var _uniqueIdCounter = 0
  var _uniqueInstance = ++_globallyUniqueIdCounter

  // Inject the following functions into the component
  component.componentWillUpdate = function(nextProps, nextState) {
    _uniqueIdCounter = 0
    if (typeof willUpdate != 'undefined') {
      willUpdate.apply(component, nextProps, nextState)
    }
  }

  component.nextUniqueId = function() {
    var id = ++_uniqueIdCounter
    return 'id-' + _uniqueInstance + '-' + _uniqueIdCounter
  }

  component.lastUniqueId = function() {
    return 'id-' + _uniqueInstance + '-' + _uniqueIdCounter
  }

  component.getUniqueId = function(identifier) {
    if (typeof identifier !== 'string') {
      console.log('Warning: Expected string identifer passed to `getUniqueId`')
      identifier = '' + identifier
    }

    if (!_htmlIds[identifier]) {
      _htmlIds[identifier] = 'id-' + _uniqueInstance + '-' + identifier
    }

    return _htmlIds[identifier]
  }
}

module.exports = {
  resetUniqueIds: resetUniqueIds,
  enableUniqueIds: injectUniqueness,
}