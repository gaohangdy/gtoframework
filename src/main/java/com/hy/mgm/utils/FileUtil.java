/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author hang
 */
public class FileUtil {

    public final static String FILE_SAVE_PATH = "C:/Development/FileServer";

    public static String saveFile(MultipartFile mpf, String path, String name) {
        String fileUrl = null;
        try {
            String fileName = name + mpf.getOriginalFilename().substring(mpf.getOriginalFilename().lastIndexOf("."));
            fileUrl = FILE_SAVE_PATH + "/" + path + "/" + fileName;
            // copy file to local disk (make sure the path "e.g. D:/temp/files" exists)
            FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream(fileUrl));
        } catch (IOException e) {
            fileUrl = null;
            System.out.println(e.getMessage());
        }
        return fileUrl;
    }

    public static void readFile(String path, OutputStream os) throws FileNotFoundException, IOException {
        InputStream in = new FileInputStream(path);

        byte[] b = new byte[1024];
        int len;
        while ((len = in.read(b)) != -1) {
            os.write(b, 0, len);
        }
        in.close();
        os.close();
    }
}
