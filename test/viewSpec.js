define(['recordView'], function(RecordView)  {

  describe('RecordView', function() {

    beforeEach(function() {
        el = $('<div></div>');
        recordView = new RecordView(el);
        recordView.render();
    });

    it('Test initialize view', function() {
        expect(recordView.$('tr').size()).toEqual(1);
    });
  });
});
