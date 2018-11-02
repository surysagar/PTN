
    'use strict';
    var pubS = (function() {

    var subscribers = {};

        return {
            publish: function (topic, data) {
                if (!subscribers[topic]) {
                    return;
                }
    
                subscribers[topic].forEach(function (subscriber) {
                    subscriber(data);
                });
            },
            subscribe: function (topic, callback) {
                var index;
    
                if (!subscribers[topic]) {
                    subscribers[topic] = [];
                }
    
                index = subscribers[topic].push(callback) - 1;
    
                return {
                    dispose: function () {
                        subscribers[topic].splice(index, 1);
                    }
                }
            }
        };
    })();
    
    var pubSub = pubS;
    var moduleA = (function() {
        return {
            publishEvent: function () {
                var data = {
                    something: 'some data'
                };
    
                pubSub.publish('atopic', data);
            }
        };
    })();
    
    var moduleB = (function() {
      var subscription;

      //return {
        subscription = pubSub.subscribe('atopic', function (data) {
          console.log('atopic was published with data: ' + data.something);
          subscription.dispose();
        });
      //}
    })();
    
    moduleA.publishEvent();
    moduleA.publishEvent();
    