FeedbackFactory.setOption('sources', '/shared/feedback');
FeedbackFactory.setOption('url', '/my/s3/feedback/report.php');
FeedbackFactory.setData('instance_id', 772270);
FeedbackFactory.addScript('https://cabinet.megagroup.ru/client.jsonp?callback=FeedbackFactory.setUser');
FeedbackFactory.setUser = function(data) {
  if (data.id) FeedbackFactory.setData('user_id', data.id);
};
