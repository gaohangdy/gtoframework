package com.hy.mgm.persistence;

import com.hy.mgm.domain.User;
import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;


public interface UserMapper {

    @Select("SELECT * FROM m_user u WHERE u.userid = #{loginId}")
    public User getUser(String loginId);
    
    @Select("SELECT * FROM M_USER U WHERE U.TYPE = #{userType}")
    public List<User> getUsers(int userType);

    @Insert("insert into m_user (userid, username, password, type, rank, email, officetel, tel, invoice, state, icon) "
            + "values(#{userId}, #{userName}, #{password}, #{userType}, #{userRank}, #{email}, #{officeTel}, #{tel}, #{invoiceFlag}, 'TRUE', #{icon})")
    public int addUser(User user); 
    
    @Update("update m_user set username=#{userName} where userid=#{userId}")
    public int updateUser(User user);
}
