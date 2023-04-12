import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import APICV from '../../../../services/curriculumvitae';

const PdfDocument = () => {
  const [dataBiodata, setDataBiodata] = useState(null);
  const [dataEducation, setDataEducation] = useState(null);
  const [dataProject, setDataProject] = useState(null);
  const [dataUserSkill, setDataUserSkill] = useState(null);
  const [httpStatus, setHttpStatus] = useState(null);

  useEffect(() => {
    APICV.getBiodata().then((response) => {
      setDataBiodata(response.data);
    });
    APICV.getEducation().then((response) => {
      setDataEducation(response.data);
    });
    APICV.getProject().then((response) => {
      setDataProject(response.data);
    });
    APICV.getUserSkill().then((response) => {
      setDataUserSkill(response.data);
    });
  }, []);

  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      marginVertical: 10,
    },
    text: {
      fontSize: 12,
      textAlign: 'justify',
      marginVertical: 5,
    },
    table: {
      display: 'table',
      width: 'auto',
      marginVertical: 10,
    },
    tableRow: {
      marginVertical: 5,
    },
    tableCol1: {
      width: '30%',
    },
    tableCol2: {
      width: '70%',
    },
    hr: {
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      marginVertical: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Biodata</Text>
        {dataBiodata &&
          dataBiodata.data.map((data) => (
            <View key={data.id}>
              <Text style={styles.subtitle}>{data.fullname}</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCol1}>Date of Birth</Text>
                  <Text style={styles.tableCol2}>{data.birth_date}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCol1}>Phone</Text>
                  <Text style={styles.tableCol2}>{data.no_telp}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCol1}>Address</Text>
                  <Text style={styles.tableCol2}>{data.address}</Text>
                </View>
              </View>
              <View style={styles.hr} />
              <Text style={styles.subtitle}>Summary</Text>
              <Text style={styles.text}>{data.summary}</Text>
            </View>
          ))}
        <Text style={styles.title}>Project Experience</Text>
        {dataProject &&
          dataProject.data.map((data) => (
            <View key={data.id}>
              <Text style={styles.subtitle}>{data.projectName}</Text>
              <Text style={styles.text}>
                {data.projectStart} to {data.projectEnd}
              </Text>
              <Text style={styles.text}>{data.projectDesc}</Text>
            </View>
          ))}
        <Text style={styles.title}>Education</Text>
        {dataEducation &&
          dataEducation.data.map((data) => (
            <View key={data.id}>
              <Text style={styles.subtitle}>{data.degree_name}</Text>
              <Text style={styles.text}>{data.univ_name}</Text>
              <Text style={styles.text}>{data.major_name}</Text>
            </View>
          ))}
        <Text style={styles.title}>Skills</Text>
        {dataUserSkill &&
          dataUserSkill.data.map((data) => (
            <View key={data.id}>
              <Text style={styles.subtitle}>{data.skillName}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

export default PdfDocument;

