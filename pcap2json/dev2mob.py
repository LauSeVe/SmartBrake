import scapy.all as scapy
import json
import binascii

def pcap_to_json(pcap_file, output_json_file):
    packets = scapy.rdpcap(pcap_file)


    for packet in packets:
        payload = binascii.hexlify(packet[scapy.Raw].load).decode('utf-8')
    payload_hex = payload[4:8]

    payload_binary = bin(int(payload_hex, 16))[2:]

    payload_binary_full = (16-len(payload_binary)) * "0" + payload_binary


    idMobile_binary = payload_binary_full[:9] 
    battery_binary = payload_binary_full[9:16]

    idMobile_decimal = int(idMobile_binary, 2)
    battery_decimal = int(battery_binary, 2)


    packet_data = {
        "idMobile": idMobile_decimal,
        "battery": battery_decimal
    }


    with open(output_json_file, 'w') as file:
        json.dump(packet_data, file)

if __name__ == "__main__":
    pcap_file = "dev2mob2.pcap"  # Replace with the path to your PCAP file
    output_json_file = "packets.json"  # Replace with the desired output JSON file

    pcap_to_json(pcap_file, output_json_file)

