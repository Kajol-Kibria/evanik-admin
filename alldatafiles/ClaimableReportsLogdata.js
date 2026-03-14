const data = [
  {
    ID: 1,
    Channel: "Flipkart",
    DateSent: "27 Sep 2023",
    TimeSent: "18:47:24",
    ReportType: "Returns not recieved",
    Records: "1000",
    RecordValue: "100000.00",
    SentTo: "naturevitindia@gmail.com",
    DownloadLink: "https://www.youtube.com/",
  },
  {
    ID: 13,
    Channel: "Flipkart",
    DateSent: "27 Sep 2023",
    TimeSent: "18:47:24",
    ReportType: "Returns not recieved",
    Records: "1000",
    RecordValue: "100000.00",
    SentTo: "naturevitindia@gmail.com",
    DownloadLink: "https://www.youtube.com/",
  },
  {
    ID: 211,
    Channel: "Flipkart",
    DateSent: "27 Sep 2023",
    TimeSent: "18:47:24",
    ReportType: "Returns not recieved",
    Records: "1000",
    RecordValue: "100000.00",
    SentTo: "naturevitindia@gmail.com",
    DownloadLink: "https://www.youtube.com/",
  },
  {
    ID: 2121,
    Channel: "Flipkart",
    DateSent: "27 Sep 2023",
    TimeSent: "18:47:24",
    ReportType: "Returns not recieved",
    Records: "1000",
    RecordValue: "100000.00",
    SentTo: "naturevitindia@gmail.com",
    DownloadLink: "https://www.youtube.com/",
  },
];

export const getdata = function (page, limit) {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && data[i]; i++) {
    array.push(data[i]);
  }

  return array;
};

export const getLength = function () {
  return data.length;
};
