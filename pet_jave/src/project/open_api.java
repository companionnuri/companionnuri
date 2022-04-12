package project;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.io.BufferedReader;
import java.io.IOException;

public class open_api {
    public static void main(String[] args) throws IOException {
        StringBuilder urlBuilder = new StringBuilder("http://www.pettravel.kr/api/listArea.do"); /*URL*/
        //urlBuilder.append("?" + URLEncoder.encode("ServiceKey","UTF-8") + "=인코딩된 서비스키"); /*Service Key*/
        //urlBuilder.append("&" + URLEncoder.encode("returnType","UTF-8") + "=" + URLEncoder.encode("JSON", "UTF-8")); /*XML 또는 JSON*/
        urlBuilder.append("?" + URLEncoder.encode("page","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
        urlBuilder.append("&" + URLEncoder.encode("pageBlock","UTF-8") + "=" + URLEncoder.encode("5", "UTF-8")); /*한 페이지 결과 수*/
        urlBuilder.append("&" + URLEncoder.encode("areaCode","UTF-8") + "=" + URLEncoder.encode("AC01", "UTF-8")); /*지역 코드, 강원도*/
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());
    }
}