// subscribing-to-a-nested-observable:

function mockRequest() {
    return Observable.of('[{"id": 1}, {"id": 2}, {"id": 3}]');
}
function otherMockRequest(id) {
    return Observable.of(`{"id":${id}, "desc": "description ${id}"}`);
}

class ItemsService {
    fetchItems() {
        return mockRequest()
            .map(res => JSON.parse(res))
            .concatAll()
            .mergeMap(item => this.fetchItem(item));
    }

    fetchItem(item) {
        return otherMockRequest(item.id)
            .map(res => JSON.parse(res));
    }
}

let service = new ItemsService();
service.fetchItems().subscribe(val => console.log(val));
