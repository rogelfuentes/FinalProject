import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}




<table cellspacing="0" cellpadding="4" id="MainContent_gvDevice" style="color:#333333;width:1012px;border-collapse:collapse;">
		<tbody><tr style="color:White;background-color:#507CD1;font-weight:bold;">
			<th scope="col">Total Records: 156</th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$CPO_LABEL')" style="color:White;">Device Location</a></th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$Device_id')" style="color:White;">Device ID</a></th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$Monitor_cd')" style="color:White;">Monitor</a></th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$Facility_Name')" style="color:White;">Facility</a></th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$Unit_Name')" style="color:White;">Unit</a></th><th scope="col"><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Sort$CPO_name')" style="color:White;">Patient Safety Monitor Name</a></th>
		</tr><tr style="color:#333333;background-color:#D1DDF1;font-weight:bold;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$0')" style="color:#333333;">Select</a></td><td>DX.E1.M1</td><td>M080930172553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E1</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$1')" style="color:#333333;">Select</a></td><td>DX.E1.M2</td><td>M070136472553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E1</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$2')" style="color:#333333;">Select</a></td><td>DX.E1.M3</td><td>M087220272553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E1</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$3')" style="color:#333333;">Select</a></td><td>DX.E1.M4</td><td>M087276572553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E1</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$4')" style="color:#333333;">Select</a></td><td>DX.E4.M1</td><td>M085067272553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E4</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$5')" style="color:#333333;">Select</a></td><td>DX.E4.M2</td><td>M080955172553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E4</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$6')" style="color:#333333;">Select</a></td><td>DX.E4.M3</td><td>M087358472553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E4</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$7')" style="color:#333333;">Select</a></td><td>DX.E4.M4</td><td>M080352372553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>E4</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$8')" style="color:#333333;">Select</a></td><td>DX.W1.M1</td><td>M080794772553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W1</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$9')" style="color:#333333;">Select</a></td><td>DX.W1.M3</td><td>M087283772553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W1</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$10')" style="color:#333333;">Select</a></td><td>DX.W1.M4</td><td>M080779472553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W1</td><td>M4</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$11')" style="color:#333333;">Select</a></td><td>DX.W2.M1</td><td>M016061762453</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W2</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$12')" style="color:#333333;">Select</a></td><td>DX.W2.M2</td><td>M050081762153</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W2</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$13')" style="color:#333333;">Select</a></td><td>DX.W2.M3</td><td>M080506272553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W2</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$14')" style="color:#333333;">Select</a></td><td>DX.W3.M2</td><td>M081035472553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$15')" style="color:#333333;">Select</a></td><td>DX.W3.M3</td><td>M036457373153</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$16')" style="color:#333333;">Select</a></td><td>DX.W3.M4</td><td>M080389772553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M4</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$17')" style="color:#333333;">Select</a></td><td>DX.W3.M5</td><td>M020846173053</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M5</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$18')" style="color:#333333;">Select</a></td><td>DX.W3.M7</td><td>M031452664153</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M7</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$19')" style="color:#333333;">Select</a></td><td>DX.W3.M8</td><td>M080665372553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M8</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$20')" style="color:#333333;">Select</a></td><td>DX.W4.M2</td><td>M080422572553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W4</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$21')" style="color:#333333;">Select</a></td><td>DX.W4.M3</td><td>M070153572553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W4</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$22')" style="color:#333333;">Select</a></td><td>LD.E8.M1</td><td>M087376472553</td><td>Y</td><td>LDS Hospital</td><td>E8</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$23')" style="color:#333333;">Select</a></td><td>LD.W6.M1</td><td>M002998780953</td><td>Y</td><td>LDS Hospital</td><td>W6</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$24')" style="color:#333333;">Select</a></td><td>LD.W7.M1</td><td>M085559372553</td><td>Y</td><td>LDS Hospital</td><td>W7</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$25')" style="color:#333333;">Select</a></td><td>LD.W8.M1</td><td>M084827672553</td><td>Y</td><td>LDS Hospital</td><td>W8</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$26')" style="color:#333333;">Select</a></td><td>LD.W8.M2</td><td>M080461272553</td><td>Y</td><td>LDS Hospital</td><td>W8</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$27')" style="color:#333333;">Select</a></td><td>LO.Med.M1</td><td>M049581162153</td><td>Y</td><td>Logan Regional Hospital</td><td>Med</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$28')" style="color:#333333;">Select</a></td><td>LO.Med.M2</td><td>M087264172553</td><td>Y</td><td>Logan Regional Hospital</td><td>Med</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$29')" style="color:#333333;">Select</a></td><td>LO.Med.M3</td><td>M084917672553</td><td>Y</td><td>Logan Regional Hospital</td><td>Med</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$30')" style="color:#333333;">Select</a></td><td>LO.Surg.M1</td><td>M070152672553</td><td>Y</td><td>Logan Regional Hospital</td><td>Surg</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$31')" style="color:#333333;">Select</a></td><td>LO.Surg.M2</td><td>M087372172553</td><td>Y</td><td>Logan Regional Hospital</td><td>Surg</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$32')" style="color:#333333;">Select</a></td><td>LO.Surg.M3</td><td>M001690572053</td><td>Y</td><td>Logan Regional Hospital</td><td>Surg</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$33')" style="color:#333333;">Select</a></td><td>LO.TCU.M1</td><td>M087179372553</td><td>Y</td><td>Logan Regional Hospital</td><td>TCU</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$34')" style="color:#333333;">Select</a></td><td>LO.TCU.M2</td><td>M050628762153</td><td>Y</td><td>Logan Regional Hospital</td><td>TCU</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$35')" style="color:#333333;">Select</a></td><td>LO.TCU.M3</td><td>M071359372553</td><td>Y</td><td>Logan Regional Hospital</td><td>TCU</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$36')" style="color:#333333;">Select</a></td><td>MK.CVTU.M1</td><td>M087156172553</td><td>Y</td><td>McKay-Dee Hospital</td><td>CVTU</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$37')" style="color:#333333;">Select</a></td><td>MK.CVTU.M2</td><td>M087226372553</td><td>Y</td><td>McKay-Dee Hospital</td><td>CVTU</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$38')" style="color:#333333;">Select</a></td><td>MK.IMC.M1</td><td>M085100772553</td><td>Y</td><td>McKay-Dee Hospital</td><td>IMC</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$39')" style="color:#333333;">Select</a></td><td>MK.IMC.M2</td><td>M069976572553</td><td>Y</td><td>McKay-Dee Hospital</td><td>IMC</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$40')" style="color:#333333;">Select</a></td><td>MK.IMC.M3</td><td>M087147172553</td><td>Y</td><td>McKay-Dee Hospital</td><td>IMC</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$41')" style="color:#333333;">Select</a></td><td>MK.IMC.M4</td><td>M087369272553</td><td>Y</td><td>McKay-Dee Hospital</td><td>IMC</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$42')" style="color:#333333;">Select</a></td><td>MK.IMC.M5</td><td>M087324472553</td><td>Y</td><td>McKay-Dee Hospital</td><td>IMC</td><td>M5</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$43')" style="color:#333333;">Select</a></td><td>MK.Med.M1</td><td>M087352372553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Med</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$44')" style="color:#333333;">Select</a></td><td>MK.Med.M2</td><td>M087342472553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Med</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$45')" style="color:#333333;">Select</a></td><td>MK.Med.M3</td><td>M080795672553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Med</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$46')" style="color:#333333;">Select</a></td><td>MK.Ortho.M1</td><td>M080429572553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Ortho</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$47')" style="color:#333333;">Select</a></td><td>MK.Rehab.M2</td><td>M047093571453</td><td>Y</td><td>McKay-Dee Hospital</td><td>Rehab</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$48')" style="color:#333333;">Select</a></td><td>MK.Rehab.M3</td><td>M080797472553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Rehab</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$49')" style="color:#333333;">Select</a></td><td>MK.SIMC.M3</td><td>M080787572553</td><td>Y</td><td>McKay-Dee Hospital</td><td>SIMC</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$50')" style="color:#333333;">Select</a></td><td>IM.ACVU.M1</td><td>M070466572553</td><td>Y</td><td>Intermountain Medical Center</td><td>ACVU</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$51')" style="color:#333333;">Select</a></td><td>IM.ACVU.M2</td><td>M087158672553</td><td>Y</td><td>Intermountain Medical Center</td><td>ACVU</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$52')" style="color:#333333;">Select</a></td><td>IM.ACVU.M3</td><td>M084856472553</td><td>Y</td><td>Intermountain Medical Center</td><td>ACVU</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$53')" style="color:#333333;">Select</a></td><td>IM.ACVU.M4</td><td>M070164372553</td><td>Y</td><td>Intermountain Medical Center</td><td>ACVU</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$54')" style="color:#333333;">Select</a></td><td>IM.T6.M1</td><td>M084872672553</td><td>Y</td><td>Intermountain Medical Center</td><td>T6</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$55')" style="color:#333333;">Select</a></td><td>IM.T6.M3</td><td>M080437672553</td><td>Y</td><td>Intermountain Medical Center</td><td>T6</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$56')" style="color:#333333;">Select</a></td><td>IM.T7.M1</td><td>M087360472553</td><td>Y</td><td>Intermountain Medical Center</td><td>T7</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$57')" style="color:#333333;">Select</a></td><td>IM.T7.M2</td><td>M087305572553</td><td>Y</td><td>Intermountain Medical Center</td><td>T7</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$58')" style="color:#333333;">Select</a></td><td>IM.T7.M3</td><td>M087265772553</td><td>Y</td><td>Intermountain Medical Center</td><td>T7</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$59')" style="color:#333333;">Select</a></td><td>IM.T8.M1</td><td>M087274772553</td><td>Y</td><td>Intermountain Medical Center</td><td>T8</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$60')" style="color:#333333;">Select</a></td><td>IM.T8.M2</td><td>M087114772553</td><td>Y</td><td>Intermountain Medical Center</td><td>T8</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$61')" style="color:#333333;">Select</a></td><td>IM.T8.M3</td><td>M087286472553</td><td>Y</td><td>Intermountain Medical Center</td><td>T8</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$62')" style="color:#333333;">Select</a></td><td>IM.T9.M1</td><td>M087290272553</td><td>Y</td><td>Intermountain Medical Center</td><td>T9</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$63')" style="color:#333333;">Select</a></td><td>IM.T9.M2</td><td>M069980372553</td><td>Y</td><td>Intermountain Medical Center</td><td>T9</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$64')" style="color:#333333;">Select</a></td><td>IM.T9.M3</td><td>M080611572553</td><td>Y</td><td>Intermountain Medical Center</td><td>T9</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$65')" style="color:#333333;">Select</a></td><td>IM.T10.M1</td><td>M087278372553</td><td>Y</td><td>Intermountain Medical Center</td><td>T10</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$66')" style="color:#333333;">Select</a></td><td>IM.T10.M2</td><td>M087248672553</td><td>Y</td><td>Intermountain Medical Center</td><td>T10</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$67')" style="color:#333333;">Select</a></td><td>IM.T10.M3</td><td>M080472772553</td><td>Y</td><td>Intermountain Medical Center</td><td>T10</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$68')" style="color:#333333;">Select</a></td><td>IM.T11.M2</td><td>M087287372553</td><td>Y</td><td>Intermountain Medical Center</td><td>T11</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$69')" style="color:#333333;">Select</a></td><td>IM.T11.M3</td><td>M027518573653</td><td>Y</td><td>Intermountain Medical Center</td><td>T11</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$70')" style="color:#333333;">Select</a></td><td>IM.T12.M1</td><td>M087210372553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$71')" style="color:#333333;">Select</a></td><td>IM.T12.M2</td><td>M087207472553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$72')" style="color:#333333;">Select</a></td><td>IM.T12.M3</td><td>M080374672553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$73')" style="color:#333333;">Select</a></td><td>IM.T12.M4</td><td>M080406372553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$74')" style="color:#333333;">Select</a></td><td>IM.T12.M5</td><td>M080521572553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M5</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$75')" style="color:#333333;">Select</a></td><td>IM.T12.M6</td><td>M085139272553</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M6</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$76')" style="color:#333333;">Select</a></td><td>IM.T14.M1</td><td>M080482672553</td><td>Y</td><td>Intermountain Medical Center</td><td>T14</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$77')" style="color:#333333;">Select</a></td><td>IM.T14.M2</td><td>M001430655353</td><td>Y</td><td>Intermountain Medical Center</td><td>T14</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$78')" style="color:#333333;">Select</a></td><td>IM.T14.M3</td><td>M087396272553</td><td>Y</td><td>Intermountain Medical Center</td><td>T14</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$79')" style="color:#333333;">Select</a></td><td>DX.W1.M2</td><td>M003802171453</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W1</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$80')" style="color:#333333;">Select</a></td><td>MK.Ortho.M2</td><td>M080792272553</td><td>Y</td><td>McKay-Dee Hospital</td><td>Ortho</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$81')" style="color:#333333;">Select</a></td><td>AV.MS.M2</td><td>M014424654353</td><td>Y</td><td>Alta View Hospital</td><td>MS</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$82')" style="color:#333333;">Select</a></td><td>AV.MS.M1</td><td>M054791262153</td><td>Y</td><td>Alta View Hospital</td><td>MS</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$83')" style="color:#333333;">Select</a></td><td>AV.ICU.M1</td><td>M080939672553</td><td>Y</td><td>Alta View Hospital</td><td>ICU</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$84')" style="color:#333333;">Select</a></td><td>DX.W4.M1</td><td>M087375572553</td><td>N</td><td>Dixie Regional Medical Center</td><td>W4</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$85')" style="color:#333333;">Select</a></td><td>AF.MS.M1</td><td>M074048572353</td><td>Y</td><td>American Fork Hospital</td><td>MS</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$86')" style="color:#333333;">Select</a></td><td>AF.MS.M2</td><td>M031810183153</td><td>Y</td><td>American Fork Hospital</td><td>MS</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$87')" style="color:#333333;">Select</a></td><td>AF.ICU.M1</td><td>M087380272553</td><td>Y</td><td>American Fork Hospital</td><td>ICU</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$88')" style="color:#333333;">Select</a></td><td>DX.W4.M1</td><td>M080395372553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W4</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$89')" style="color:#333333;">Select</a></td><td>DX.W2.M4</td><td>M085060272553</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W2</td><td>M4</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$90')" style="color:#333333;">Select</a></td><td>DX.W3.M1</td><td>M054789262153</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$91')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.None</td><td>M018738162053</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>None</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$92')" style="color:#333333;">Select</a></td><td>UV.AAU9.M1</td><td>M050035162153</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU9</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$93')" style="color:#333333;">Select</a></td><td>UV.AAU5.M1</td><td>M000501171653</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU5</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$94')" style="color:#333333;">Select</a></td><td>UV.AAU8.M1</td><td>M049604562153</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU8</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$95')" style="color:#333333;">Select</a></td><td>UV.AAU7.M1</td><td>M085123272553</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU7</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$96')" style="color:#333333;">Select</a></td><td>UV.AAU6.M1</td><td>M036403573053</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU6</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$97')" style="color:#333333;">Select</a></td><td>UV.AAU11.M1</td><td>M032686363553</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU11</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$98')" style="color:#333333;">Select</a></td><td>DX.W3.M6</td><td>M042262563853</td><td>Y</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M6</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$99')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.M6</td><td>M080336172553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>M6</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$100')" style="color:#333333;">Select</a></td><td>UV.AAU9.M3</td><td>M038883563853</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU9</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$101')" style="color:#333333;">Select</a></td><td>UV.AAU6.M2</td><td>M003693771453</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU6</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$102')" style="color:#333333;">Select</a></td><td>UV.AAU5.M2</td><td>M033900680853</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU5</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$103')" style="color:#333333;">Select</a></td><td>UV.AAU11.M2</td><td>M048986754953</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU11</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$104')" style="color:#333333;">Select</a></td><td>UV.AAU7.M2</td><td>M102280172553</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU7</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$105')" style="color:#333333;">Select</a></td><td>UV.AAU8.M2</td><td>M056643462153</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU8</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$106')" style="color:#333333;">Select</a></td><td>UV.AAU9.M2</td><td>M045291754853</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU9</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$107')" style="color:#333333;">Select</a></td><td>UV.AAU11.M3</td><td>M040538172953</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU11</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$108')" style="color:#333333;">Select</a></td><td>UV.AAU7.M3</td><td>M023218554853</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU7</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$109')" style="color:#333333;">Select</a></td><td>UV.AAU6.M3</td><td>M054302762153</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU6</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$110')" style="color:#333333;">Select</a></td><td>UV.AAU8.M3</td><td>M070942685253</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU8</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$111')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Reimaging3</td><td>M060317462153</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Reimaging3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$112')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Reimaging5</td><td>M050520262153</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Reimaging5</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$113')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Skipper</td><td>M087230172553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Skipper</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$114')" style="color:#333333;">Select</a></td><td>IM.T12.M7</td><td>M005041454753</td><td>Y</td><td>Intermountain Medical Center</td><td>T12</td><td>M7</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$115')" style="color:#333333;">Select</a></td><td>LH.Med Surg.M1</td><td>M067233785253</td><td>Y</td><td>Layton Hospital</td><td>Med Surg</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$116')" style="color:#333333;">Select</a></td><td>IM.T11.M1</td><td>M069239663953</td><td>Y</td><td>Intermountain Medical Center</td><td>T11</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$117')" style="color:#333333;">Select</a></td><td>IM.T6.M2</td><td>M012858482553</td><td>Y</td><td>Intermountain Medical Center</td><td>T6</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$118')" style="color:#333333;">Select</a></td><td>UV.AAU11.M4</td><td>M070583555253</td><td>Y</td><td>Utah Valley Hospital</td><td>AAU11</td><td>M4</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$119')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.None</td><td>M034154454353</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>None</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$120')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Sparky</td><td>M085138372553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Sparky</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$121')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Anna</td><td>M096379161953</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Anna</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$122')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.T11</td><td>M069996372553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>T11</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$123')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.T6power</td><td>M087267572553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>T6power</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$124')" style="color:#333333;">Select</a></td><td>LH.Med Surg.M3</td><td>M017941663353</td><td>Y</td><td>Layton Hospital</td><td>Med Surg</td><td>M3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$125')" style="color:#333333;">Select</a></td><td>LH.Med Surg.M2</td><td>M007288355053</td><td>Y</td><td>Layton Hospital</td><td>Med Surg</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$126')" style="color:#333333;">Select</a></td><td>VCT.QA.Iduna</td><td>M012272770353</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>Iduna</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$127')" style="color:#333333;">Select</a></td><td>CC.Med Surg.M2</td><td>M002010472253</td><td>N</td><td>Cedar City Hospital</td><td>Med Surg</td><td>M2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$128')" style="color:#333333;">Select</a></td><td>CC.Med Surg.M1</td><td>M029287762453</td><td>N</td><td>Cedar City Hospital</td><td>Med Surg</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$129')" style="color:#333333;">Select</a></td><td>CC.Med Surg.M3</td><td>M019147663053</td><td>N</td><td>Cedar City Hospital</td><td>Med Surg</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$130')" style="color:#333333;">Select</a></td><td>VCT.QA.Elsa</td><td>M054141663953</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>Elsa</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$131')" style="color:#333333;">Select</a></td><td>RV.MS.M1</td><td>M006106164953</td><td>Y</td><td>Riverton Hospital</td><td>MS</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$132')" style="color:#333333;">Select</a></td><td>RV.MS.M2</td><td>M068729362953</td><td>Y</td><td>Riverton Hospital</td><td>MS</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$133')" style="color:#333333;">Select</a></td><td>RV.MS.M3</td><td>M080812272553</td><td>Y</td><td>Riverton Hospital</td><td>MS</td><td>M3</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$134')" style="color:#333333;">Select</a></td><td>DX.W3.M1</td><td>M059014272453</td><td>N</td><td>Dixie Regional Medical Center</td><td>W3</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$135')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Hans</td><td>M015911465153</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Hans</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$136')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.None</td><td>M054774155153</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>None</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$137')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Soren</td><td>M053740270653</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Soren</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$138')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Queen</td><td>M080948672553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Queen</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$139')" style="color:#333333;">Select</a></td><td>VCT.QA.QA_L</td><td>M087385472553</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>QA_L</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$140')" style="color:#333333;">Select</a></td><td>VCT.QA.MS_Updates</td><td>M070138272553</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>MS_Updates</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$141')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Toe</td><td>M088331572553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Toe</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$142')" style="color:#333333;">Select</a></td><td>MK.Rehab.M1</td><td>M038290670253</td><td>Y</td><td>McKay-Dee Hospital</td><td>Rehab</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$143')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Double Images</td><td>M030647155053</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Double Images</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$144')" style="color:#333333;">Select</a></td><td>VCT.QA.QA3</td><td>M050644262153</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>QA3</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$145')" style="color:#333333;">Select</a></td><td>VCT.QA.QA2</td><td>M080509672553</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>QA2</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$146')" style="color:#333333;">Select</a></td><td>VCT.QA.QA4</td><td>M064190154853</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>QA4</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$147')" style="color:#333333;">Select</a></td><td>VCT.QA.Lieutenant</td><td>M053019362153</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>Lieutenant</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$148')" style="color:#333333;">Select</a></td><td>VCT.QA.Ryder</td><td>M054428562153</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>Ryder</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$149')" style="color:#333333;">Select</a></td><td>MK.SIMC.M1</td><td>M085084372553</td><td>N</td><td>McKay-Dee Hospital</td><td>SIMC</td><td>M1</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$150')" style="color:#333333;">Select</a></td><td>MK.SIMC.M1</td><td>M017742772553</td><td>Y</td><td>McKay-Dee Hospital</td><td>SIMC</td><td>M1</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$151')" style="color:#333333;">Select</a></td><td>VCT.QA.Sven</td><td>M01047170153</td><td>N</td><td>Valley Center Tower</td><td>QA</td><td>Sven</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$152')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.Duke</td><td>M023268763553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>Duke</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$153')" style="color:#333333;">Select</a></td><td>Cerner.Advance Exchange.T12.M7</td><td>M085042272553</td><td>N</td><td>Back to Cerner</td><td>Advance Exchange</td><td>T12.M7</td>
		</tr><tr style="background-color:#EFF3FB;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$154')" style="color:#333333;">Select</a></td><td>MK.SIMC.M2</td><td>M003931571653</td><td>N</td><td>McKay-Dee Hospital</td><td>SIMC</td><td>M2</td>
		</tr><tr style="background-color:White;">
			<td><a href="javascript:__doPostBack('ctl00$MainContent$gvDevice','Select$155')" style="color:#333333;">Select</a></td><td>MK.SIMC.M2</td><td>M087178472553</td><td>N</td><td>McKay-Dee Hospital</td><td>SIMC</td><td>M2</td>
		</tr>
	</tbody></table>