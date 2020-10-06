import Global from '../common/Global'

export default class VisitingCardService {

    static async get_all_visiting_cards() {
        try {
            const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDJlZDQ3MzAxZTk4ZTExMWVhNmE3NzQ1ZjFjMTgwYTk4MmQzOTRjNDAxYzNhYjNjNjQ5ODNjNWY1OGE3ZWI5ZTExMzFkNTkwNWUxM2Q1YmQiLCJpYXQiOjE2MDE3MDI4NjIsIm5iZiI6MTYwMTcwMjg2MiwiZXhwIjoxNjMzMjM4ODYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TFsV7NKfZw7GtGVuxhKIP-UnsALAGUusA4qdaqsG7rtS-AcZkS8cefM7srLes3JJkYplq7039KXiPHLoQ41aVwPWxmEcuzUm3vOOQa8oHN8mfmfdXwLotvtBCqLd5StNNOn56TPwuQpzNZCz7BHoHmPKZrc6YrzvoOn4r0np8sM5PbJIgm0mQfq4BPyytDi4zXdc7jz_sP6cAuJ-hzEvOSzyuRDF44zmt0sdjw9jddwjw-Qo3umfByhigOeYm2lkjuY1wvOvtd13RGmqLq-4ZvoktDUCP_UTAXdTA4c7aA6k150E47dV7LZHuHH0WTpsOdvScJzkcOWTQx9VkgDrZIsyLXNbhxM3HuLCyPrmzK7Wx7pX0-KUPXCzY4sHd7qA5c3GwevFd3lSk3KhPfHLiY7IXS-FTx9R1Y5Nw5_UxAq4nrMh9JxFKrrXVti065JDy8ngOMlWa5fUkMuDPXHlGVvEOsDAfad3T9-XJ1s3mZ8ZgKnh5qvWXjsO3bj31VCbwK7OtSM5jqEpRIVGLzjpZqj2giJemGosI2JlKU7BaW2YDfDkRg3KpdJwJYTz_9PpWlt5qROyJltyLGnTLmPElxstWcDMcg-wa3ZcneDbFlluflQ2sIn2Gj0oMds65KUlM2ppKv4KbTwESTKC2XcfmWlv86FmIlxzotwG6mOFi9c";
            let response = await fetch(Global.API_ALL_VISITING_CARDS, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization : 'Bearer '+ ACCESS_TOKEN
                },

            });
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
        }
    }



}
