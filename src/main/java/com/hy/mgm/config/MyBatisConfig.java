package com.hy.mgm.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;

import javax.sql.DataSource;
import org.apache.ibatis.datasource.DataSourceFactory;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

@Configuration
@MapperScan("com.hy.*.persistence")
public class MyBatisConfig {

    @Bean
    @ConfigurationProperties(prefix="mybatis.datasource")
    public DataSource dataSource() {
        DataSource dataSource = DataSourceBuilder.create().build();
       
//        dataSource.setDriverClass("com.mysql.jdbc.Driver");
//        dataSource.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/test?autoReconnect=true&useCompression=true" +
//                "&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&allowMultiQueries=true");
//        dataSource.setUser("root");
//        dataSource.setPassword("mysql");
//        dataSource.setAcquireIncrement(10);
//        dataSource.setIdleConnectionTestPeriod(60);
//        dataSource.setMaxPoolSize(100);
//        dataSource.setMaxStatements(50);
//        dataSource.setMinPoolSize(10);

        return dataSource;
    }

//    @Bean
//    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
//        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
//        sessionFactory.setDataSource(dataSource);
//        return sessionFactory.getObject();
//    }
    @Bean
    public DataSourceTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
//        sessionFactory.setTypeAliasesPackage("sample.mybatis.domain");
        return sessionFactory;
    }

}
